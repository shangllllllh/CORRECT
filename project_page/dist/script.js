(() => {
  "use strict";

  const copyButton = document.querySelector("[data-copy-target]");
  copyButton?.addEventListener("click", async () => {
    const target = document.getElementById(copyButton.dataset.copyTarget);
    const label = copyButton.querySelector(".copy-label");
    if (!target || !label) return;

    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      label.textContent = "Copied";
      window.setTimeout(() => { label.textContent = "Copy"; }, 1600);
    } catch {
      label.textContent = "Select text to copy";
    }
  });

  const modal = document.querySelector(".image-modal");
  const modalImage = modal?.querySelector("img");
  const modalClose = modal?.querySelector(".modal-close");

  const closeModal = () => {
    if (!modal?.open) return;
    modal.close();
    if (modalImage) modalImage.src = "";
  };

  document.querySelectorAll(".zoomable").forEach((figure) => {
    figure.tabIndex = 0;
    figure.setAttribute("role", "button");
    figure.setAttribute("aria-label", "Open figure at full size");

    const openFigure = () => {
      if (!modal || !modalImage || typeof modal.showModal !== "function") return;
      const image = figure.querySelector("img");
      const source = figure.dataset.full || image?.src;
      if (!source) return;
      modalImage.src = source;
      modalImage.alt = image?.alt || "Expanded research figure";
      modal.showModal();
    };

    figure.addEventListener("click", openFigure);
    figure.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openFigure();
    });
  });

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  const videos = [...document.querySelectorAll("video")];
  videos.forEach((video) => {
    video.addEventListener("play", () => {
      videos.forEach((other) => {
        if (other !== video && !other.paused) other.pause();
      });
    });
  });
})();
