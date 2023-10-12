function validateForm() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const konfirmasiPassword = document.getElementById("konfirmasi-password").value;
  
    if (!nama || !email || !password || !konfirmasiPassword) {
      alert("Semua kolom harus diisi");
      return false;
    }
  
    return true;
  }
  