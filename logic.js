var usia = document.getElementById("umur");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("BB");
var laki = document.getElementById("l");
var perempuan = document.getElementById("p");
var form = document.getElementById("form");
var areaHasil = document.querySelector(".comment");
    modalKonten = document.querySelector(".modal-content");
    modalTeks = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

//function untuk memeriksa apakah user sudah mengisi semua kolom atau belum
function hitungBMI() {
  if (usia.value == '' || tinggi.value == '' || berat.value == '' || (laki.checked == false && perempuan.checked == false)) {
       modal.style.display = "block";
      modalTeks.innerHTML = `Isi semua kolom!`;
  } else {
    kalkulasiBMI();
  }
}

//function yang menyimpan hasil inputan user lalu hasil inputannya akan diperiksa function hitungBMI
function kalkulasiBMI() {
   var p = [usia.value, tinggi.value, berat.value];
    if (laki.checked) {
    p.push("laki");
       } else if (perempuan.checked) {
    p.push("perempuan");
        }

//Rumus BMI, BB inputan user akan dibagi dengan tinggi inputan user yang telah diubah dari cm ke m dan dipangkat kan 2
  var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

  //pengkondisian if/else untuk menentukan apakah hasil perhitungan BMI user memiliki kekurangan atau kelebihan atau normal
  var hasil = '';
  if (bmi < 18.5) {
    hasil = 'Kekurangan berat badan! Makan lebih banyak!!';
       } else if (18.5 <= bmi && bmi <= 24.9) {
        hasil = 'Memiliki berat yang normal';
        } else if (25 <= bmi && bmi <= 29.9) {
         hasil = 'Kelebihan berat badan! Mulailah gaya hidup sehat';
        } else if (30 <= bmi && bmi <= 34.9) {
          hasil = 'Memiliki obesitas! Kurangi konsumsi lemak berlebihan dan mulai lah berolahraga';
        } else if (35 <= bmi) {
           hasil = 'Memiliki obesitas Ekstrim! Jaga Pola Makan Anda!!!!';
        }

  areaHasil.style.display = "block";
       document.querySelector(".comment").innerHTML = `Anda <span id="comment">${hasil}</span>`;
        document.querySelector("#result").innerHTML = bmi.toFixed(2);// kode bmi.toFixed untuk menampilkan dua angka dibelakang koma
      }

// Ketika pengguna mengklik <span> (x), tutup modal
span.onclick = function() {
  modal.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
