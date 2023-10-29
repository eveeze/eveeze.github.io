document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga') ? parent.querySelector('.harga').innerHTML : 'Harga tidak tersedia';
        let judul = parent.querySelector('.card-text') ? parent.querySelector('.card-text').innerHTML : 'Judul tidak tersedia';
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : ' <i> PRODUK INI BELUM MEMILIKI DESKRIPSI <i>';
 

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click()

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi ;
        document.querySelector('.modalHarga').innerHTML = harga ;

        const nomorHp = '62882003310360';
        let pesan = `https://api.whatsapp.com/send?phone=${nomorHp} &text=Halo Bang , saya mau pesan produk ini ${gambar}`;
        document.querySelector('.btnBeli').href = pesan
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");

    hamburger.onclick = function() {
        navbar.classList.toggle("active");
    };
    const navLinks = document.querySelectorAll(".nav-bar ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navbar.classList.remove("active");
        });
    });
    document.onclick = function(e) {
        if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
            hamburger.classList.remove("active");
            navbar.classList.remove("active");
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Ganti dengan alamat email penerima
        const recipientEmail = "jsah737@gmail.com";

        const subject = `Pesan dari ${name}`;
        const body = `Email: ${email}\n\n${message}`;

        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        // Buka email klien dengan data yang diisi
        window.location.href = mailtoLink;

        // Tampilkan pesan sukses
        successMessage.style.display = "block";

        // Reset formulir
        contactForm.reset();
    });
});