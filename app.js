console.log("Praktikum Dimulai");

// aktivitas 1 -> DOM Selection: menangkap elemen sebelum memanipulasi HTML
// ambil elemen -> simpan di dalam variabel javascript 

// 1. ambil elemen judul berdasarkan id 
// document.getElementById("......"); -> ambil elemen html spesifik berdasarkan id
const judulUtama = document.getElementById("judul-utama");

// 1.1 querySelector(#........) -> mengambil id berdasrakan atribut id
// tanda (#) yaitu untuk menampilkan id, sedangkan tanda (.) untuk menampilkan class
// ambil elemen sub judul berdasarkan id    
const subJudul = document.querySelector("#sub-judul");

// 2. mengambil elemen pada kartu 1 (kartu manipulasi teks dan style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

//3. mengambil tombol aksi pada kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. mengambil elemen pada kartu 2 (fitur catatan dinamis / todolist)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");

// aktivitas 2: manipulasi teks dan style pada kartu 1
//addEventListener("click", function() {....}) -> artinya tolong dengarkan dan tunggu 
// setelah di "click" oleh user jalankan perintah dalam function 
btnUbahTeks.addEventListener("click", function() { 
// .innerText -> untuk mengisi teks pada elemen html
teksPreview.innerText = "Hebat! Teks ini berhasil diubah melalui DOM!";

// .style.color = mengubah warna teks secara langsung melalui javascript
teksPreview.style.color = "#0cf00f";

// console.log = mencetak pesan di console
console.log("DOM Teks Preview telah diperbaharui!");
    
 })

 btnToggleWarna.addEventListener("click", function() {

    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM box preview telah diperbarui!");
    
 });







 btnReset.addEventListener("click", function(){

    teksPreview.innerText = "Halo! Teks ini siap diubah oleh java script";
    teksPreview.style.color = "";

    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM box preview telah di kembalikan ke default");
 });

 // Aktivitas 3 & 4 : Membuat catatan dinamis (todolist) & menghitung jumlah catatan (pada card 2)

 // lamgkah 1 : membuat variabel untuk menampung jumlah catatan

 let totalcatatan = 0;

 // langkah 2 : membuat fungsi untuk menambahkan catatan baru

 function perbaruijumlah() {
    jumlahCatatan.innerText = totalcatatan;

    if (totalcatatan === 0) {
        pesanKosong.classList.remove("hidden");
    } else {
        pesanKosong.classList.add("hidden");
    }
 }

 // Langkah 3 : membuat fungsi untuk menambahkan catatan baru
 function tambahcatatan() {
    const IsiTeks = inputCatatan.value.Trim();
    
    if (IsiTeks === "") {
        alert("Catatan tidak boleh kosong!");
        return;
        
    }

    const LiBaru = document.createElement("Li");
    LiBaru.className = "not-item";

    LiBaru.innerHTML = '<span$(IsiTeks)</span> <button class="btn-hapus">hapus</button>';

    const btnHapus = LiBaru.querySelector("btn-hapus");
    btnHapus.addEventListener("click", function(){
        LiBaru.remove();
        totalcatatan--;
        perbaruijumlah();
        console.log('DOM catatan "$(IsiTeks)" telah dihapus');
        
    })

    daftarCatatan.appendChild(LiBaru);

    inputCatatan.value = "";

    totalcatatan++;
    perbaruijumlah();

    console.log('DOM catatan baru ditambahkan : "$(IsiTeks)"');
    
 }

 // Langkah 4 : Event Listener untuk tombol tambah catatan
 btnTambah.addEventListener("click", function(){
    tambahcatatan();
 });

 inputCatatan.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        tambahcatatan();
    }
});

