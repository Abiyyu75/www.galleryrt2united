document.addEventListener("DOMContentLoaded", () => {

    // =======================================================
    // 1. MODE TERANG / GELAP
    // =======================================================

    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");

        // Mengubah ikon tombol
        toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
    });



    // =======================================================
    // 2. ANIMASI COUNTER
    // =======================================================

    function animateCounter(id, endValue, duration) {
        const element = document.getElementById(id);
        let start = 0;

        const stepTime = Math.abs(Math.floor(duration / endValue));

        const timer = setInterval(() => {
            start++;
            element.textContent = start;
            if (start === endValue) clearInterval(timer);
        }, stepTime);
    }

    animateCounter("stat-hari", 5, 1400);
    animateCounter("stat-anggota", 10, 1400);
    animateCounter("stat-destinasi", 8, 1400);



    // =======================================================
    // 3. ANIMASI SCROLL (FADE-IN)
    // =======================================================

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-element")
        .forEach(el => observer.observe(el));

});
