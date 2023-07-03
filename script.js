// JavaScript for transactions.html

const destinasiField = document.getElementById('destinasi');
const hotelSelect = document.getElementById('hotel');
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const tanggalInput = document.getElementById('tanggal');
const hargaElement = document.getElementById('harga');

function toggleFormFields() {
  const destinasi = destinasiField.value;

  if (destinasi === 'hotel') {
    document.getElementById('hotelFields').style.display = 'block';
    document.getElementById('wisataFields').style.display = 'none';
  } else if (destinasi === 'tempat-wisata') {
    document.getElementById('hotelFields').style.display = 'none';
    document.getElementById('wisataFields').style.display = 'block';
  } else {
    document.getElementById('hotelFields').style.display = 'none';
    document.getElementById('wisataFields').style.display = 'none';
  }

  calculateEstimate();
}

function calculateEstimate() {
  const destinasi = destinasiField.value;
  const hotel = hotelSelect.value;
  const checkin = new Date(checkinInput.value);
  const checkout = new Date(checkoutInput.value);
  const tanggal = new Date(tanggalInput.value);
  let jumlahHari = 0;
  let harga = 0;

  if (destinasi === 'hotel') {
    if (checkin && checkout) {
      jumlahHari = Math.ceil((checkout - checkin) / (1000 * 3600 * 24));
    }
    if (hotel === 'Hotel Bali Beach Resort') {
      harga = 2000000;
    } else if (hotel === 'Hotel Jogja Paradise') {
      harga = 1500000;
    } else if (hotel === 'Hotel Komodo Island Resort') {
      harga = 3500000;
    } else if (hotel === 'Hotel Raja Ampat Paradise') {
      harga = 4000000;
    }
    harga *= jumlahHari || 0;
  } else if (destinasi === 'tempat-wisata') {
    const hargaTiket = 500000; // Harga tiket tempat wisata
    harga = hargaTiket;
  }

  hargaElement.textContent = harga ? 'Rp ' + harga.toLocaleString() : '-';
}

destinasiField.addEventListener('change', calculateEstimate);
hotelSelect.addEventListener('change', calculateEstimate);
checkinInput.addEventListener('change', calculateEstimate);
checkoutInput.addEventListener('change', calculateEstimate);
tanggalInput.addEventListener('change', calculateEstimate);
