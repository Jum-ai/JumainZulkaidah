const button = document.querySelector('#btnFollow');
button.addEventListener('click', function () {
    const hidden = document.querySelector('div.social-media');
    hidden.classList.toggle('hidden');
})
const arrowUp = document.querySelector('#arrowUp');
arrowUp.addEventListener('click', function () {
    const hidden = document.querySelector('div.social-media');
    hidden.classList.add('hidden');
})
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav-link");

    function setActiveNavLink() {
        var currentSectionId = "";

        // Mendeteksi bagian halaman yang sedang ditampilkan berdasarkan posisi scroll
        // Anda dapat mengganti pendekatan ini dengan menggunakan event lain jika diperlukan
        // (misalnya, menggunakan Intersection Observer)
        if (window.scrollY < document.getElementById("akademik").offsetTop) {
            currentSectionId = "tentang";
        } else if (window.scrollY < document.getElementById("galeri").offsetTop) {
            currentSectionId = "akademik";
        } else if (window.scrollY < document.getElementById("kontak").offsetTop) {
            currentSectionId = "galeri";
        } else {
            currentSectionId = "kontak";
        }


        // Menghapus kelas "active" dari semua tombol navigasi
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });

        // Menambahkan kelas "active" pada tombol navigasi yang sesuai dengan bagian yang ditampilkan
        document.querySelector('a[href="#' + currentSectionId + '"]').classList.add("active");
    }

    // Memanggil fungsi setActiveNavLink saat halaman dimuat dan saat scroll
    setActiveNavLink();
    window.addEventListener("scroll", setActiveNavLink);
});
