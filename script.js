// =================================================
// script.js: ANIMASI COUNTER & SCROLL EFFECTS
// =================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNGSI ANIMASI COUNTER STATISTIK
    
    /**
     * Menganimasikan hitungan dari 0 hingga endValue.
     */
    function animateCounter(id, endValue, duration) {
        const element = document.getElementById(id);
        let start = 0;
        
        // Menghitung interval waktu untuk setiap langkah (step)
        const stepTime = Math.abs(Math.floor(duration / endValue)); 

        const timer = setInterval(() => {
            start += 1;
            element.textContent = start;
            if (start === endValue) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Nilai-nilai statistik yang akan dianimasikan
    const totalHari = 5;
    const totalAnggota = 10;
    const totalDestinasi = 8;

    // Panggil fungsi counter saat DOM dimuat
    animateCounter('stat-hari', totalHari, 1500);
    animateCounter('stat-anggota', totalAnggota, 1500);
    animateCounter('stat-destinasi', totalDestinasi, 1500);


    // 2. LOGIKA EFEK SCROLL (Fade-in/Slide-up menggunakan Intersection Observer)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'visible' jika elemen muncul di viewport
                entry.target.classList.add('visible');
                // Berhenti mengamati setelah elemen terlihat
                observer.unobserve(entry.target); 
            }
        });
    }, {
        // Memicu ketika 10% dari elemen terlihat
        threshold: 0.1
    });

    // Pilih semua elemen yang ingin diberi efek animasi
    document.querySelectorAll('.lokasi-card, .peserta-card, .timeline-content, .refleksi-content, .stat-card, .galeri-item, .player-bubble').forEach(card => {
        // Set kondisi awal (tersembunyi dan sedikit turun)
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.transform = 'translateY(20px)';
        
        // Mulai mengamati elemen
        observer.observe(card);
    });
});
