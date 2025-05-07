document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");
  
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedCategory = btn.getAttribute("data-category");
  
        filterButtons.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");
  
        menuItems.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");
          item.style.display =
            selectedCategory === "all" || selectedCategory === itemCategory
              ? "block"
              : "none";
        });
      });
    });
  });
  