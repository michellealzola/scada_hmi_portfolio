// Handle sidebar active state
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar .nav-link");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
