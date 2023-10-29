<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["fullName"];
    $email = $_POST["email"];
    $pesan = $_POST["message"];

    $penerima = "jsah737@gmail.com";

    $subjek = "Pesan dari $nama";

    $pesanEmail = "Nama: $nama\n";
    $pesanEmail .= "Email: $email\n";
    $pesanEmail .= "Pesan:\n$pesan";

    $header = "From: $email";

    $berhasil = mail($penerima, $subjek, $pesanEmail, $header);

    if ($berhasil) {
        echo "<script>alert('Pesan berhasil terkirim.'); window.location = '/';</script>";
    } else {
        echo "<script>alert('Pesan gagal terkirim.'); window.location = '/';</script>";
    }
} else {
    header("Location: /");
}
?>
