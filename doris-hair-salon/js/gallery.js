/**
 * Gallery grid, category filters, lazy images, and accessible lightbox.
 */
(function () {
  function initGallery() {
    const galleryItems = window.DORIS_GALLERY || [];
    const grid = document.querySelector("[data-gallery-grid]");
    const empty = document.querySelector("[data-gallery-empty]");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const lightbox = document.querySelector("[data-lightbox]");
    const lightboxImg = document.querySelector("[data-lightbox-img]");
    const lightboxCaption = document.querySelector("[data-lightbox-caption]");
    const lightboxDialog = document.querySelector("[data-lightbox-dialog]");
    const prevBtn = document.querySelector("[data-lightbox-prev]");
    const nextBtn = document.querySelector("[data-lightbox-next]");

    if (!grid || !lightbox || !lightboxImg) return;

    let activeFilter = "all";
    let visibleItems = galleryItems.slice();
    let lightboxIndex = 0;
    let lastFocus = null;

    function filteredItems() {
      if (activeFilter === "all") return galleryItems.slice();
      return galleryItems.filter(function (item) {
        return item.category === activeFilter;
      });
    }

    function render() {
      visibleItems = filteredItems();
      grid.replaceChildren();

      if (visibleItems.length === 0) {
        if (empty) empty.hidden = false;
        return;
      }
      if (empty) empty.hidden = true;

      visibleItems.forEach(function (item, index) {
        const figure = document.createElement("figure");
        figure.className = "gallery-item" + (item.tall ? " gallery-item--tall" : "");
        figure.dataset.category = item.category;

        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-label", "Open larger view: " + item.caption);
        button.addEventListener("click", function () {
          openLightbox(index);
        });

        const img = document.createElement("img");
        img.alt = item.alt;
        img.width = 900;
        img.height = 1125;
        img.loading = "lazy";
        img.decoding = "async";
        img.src = item.src;

        const caption = document.createElement("figcaption");
        caption.textContent = item.caption;

        button.appendChild(img);
        figure.appendChild(button);
        figure.appendChild(caption);
        grid.appendChild(figure);
      });
    }

    function setFilter(value) {
      activeFilter = value;
      filterBtns.forEach(function (btn) {
        const on = btn.dataset.filter === value;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      render();
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setFilter(btn.dataset.filter || "all");
      });
    });

    function updateLightbox() {
      const item = visibleItems[lightboxIndex];
      if (!item) return;
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      if (lightboxCaption) lightboxCaption.textContent = item.caption;
      if (prevBtn) prevBtn.disabled = lightboxIndex <= 0;
      if (nextBtn) nextBtn.disabled = lightboxIndex >= visibleItems.length - 1;
    }

    function openLightbox(index) {
      lightboxIndex = index;
      lastFocus = document.activeElement;
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      updateLightbox();
      const closeBtn = lightbox.querySelector(".lightbox__close");
      if (closeBtn && closeBtn.focus) closeBtn.focus();
      else if (lightboxDialog && lightboxDialog.focus) lightboxDialog.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.classList.remove("lightbox-open");
      lightboxImg.removeAttribute("src");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    function step(delta) {
      const next = lightboxIndex + delta;
      if (next < 0 || next >= visibleItems.length) return;
      lightboxIndex = next;
      updateLightbox();
    }

    lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
      el.addEventListener("click", closeLightbox);
    });
    if (prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { step(1); });

    document.addEventListener("keydown", function (event) {
      if (lightbox.hidden) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    });

    render();
  }

  window.DorisGallery = { init: initGallery };
})();
