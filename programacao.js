/* =========================
   MENU MOBILE
========================= */
 
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
 
if (menuBtn && menu) {
 
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
 
    /* Fecha o menu ao clicar em um link */
    const links = menu.querySelectorAll("a");
 
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}
 
 
/* =========================
   ANO AUTOMÁTICO
========================= */
 
const year = document.getElementById("year");
 
if (year) {
    year.textContent = new Date().getFullYear();
}
 