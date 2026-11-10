
// =========================
// RAIVI BEAUTY CARE
// Main JavaScript
// =========================

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const yearElement = document.getElementById("year");

    // Menampilkan tahun saat ini pada footer
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Membuka dan menutup navigasi pada perangkat mobile
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Menutup menu setelah pengguna memilih tautan
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Buka menu navigasi"
                );
                menuToggle.textContent = "☰";
            });
        });

        // Menutup menu jika pengguna menekan tombol Escape
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Buka menu navigasi"
                );
                menuToggle.textContent = "☰";
            }
        });
    }

    // Navigasi aktif berdasarkan halaman yang sedang dibuka
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");

        if (
            (currentPage === "about.html" && href === "about.html") ||
            (
                (currentPage === "" || currentPage === "index.html") &&
                href === "index.html"
            )
        ) {
            link.classList.add("active");
        }
    });
});