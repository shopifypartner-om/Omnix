document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll("[data-open]");
  const popups = document.querySelectorAll(".popup");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const popupId = trigger.getAttribute("data-open");
      const targetPopup = document.getElementById(popupId);

      // Close other open popups
      popups.forEach(p => {
        if (p !== targetPopup) p.classList.remove("active");
      });

      targetPopup.classList.toggle("active");
    });
  });

  // Close when clicking overlay or anywhere outside
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      popups.forEach(p => p.classList.remove("active"));
    }
  });

  // Specifically for mobile sliding menu: close on item click
  document.querySelectorAll(".popup-item").forEach(item => {
    item.addEventListener("click", (e) => {
      // If it's not a form submit button, just close the popup
      if (item.tagName !== 'BUTTON') {
        item.closest(".popup").classList.remove("active");
      }
    });
  });
});