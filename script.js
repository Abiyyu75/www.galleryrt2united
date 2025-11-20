// =================================================
// script.js: ANIMASI COUNTER & SCROLL EFFECTS
// =================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNGSI ANIMASI COUNTER STATISTIK
    function animateCounter(id, endValue, duration) {
        const element = document.getElementById(id);
        let start = 0;

        const stepTime = Math.abs(Math.floor(duration / endValue));

        const timer = setInterval(() => {
            start += 1;
            element.textContent = start;
            if (start === endValue) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    const totalHari = 5;
    const totalAnggota = 10;
    const totalDestinasi = 8;

    document.getElementById('stat-hari').textContent = totalHari;
    document.getElementById('stat-anggota').textContent = totalAnggota;
    document.getElementById('stat-destinasi').textContent = totalDestinasi;


    // 2. LOGIKA EFEK SCROLL (Fade-in / Slide-up)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Tambahkan kondisi awal ke semua elemen yang ingin dianimasikan
    document.querySelectorAll('.lokasi-card, .peserta-card, .timeline-content, .refleksi-content, .galeri-item')
        .forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

            observer.observe(card);
        });

});
