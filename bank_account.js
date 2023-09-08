let saldo = 0;

document.getElementById('saldo').textContent = saldo;

const updateSaldo = (saldo) => {
  document.getElementById('saldo').textContent = saldo;
}

    const tambahSaldo = () => {
     let input = prompt("Masukkan Jumlah Saldo yang Ingin Ditambah :")
      if (!isNaN(input)) {
        saldo += parseInt(input)
        updateSaldo(saldo);
        console.log("Anda Berhasil Menambahkan Saldo. Sisa Saldo Saat ini :" + saldo)
        alert("Anda Berhasil Menambahkan Saldo. Sisa Saldo Saat ini :" + saldo)
      } else {
        alert("Input tidak valid. Mohon masukkan angka.");
      }
      
    }

    const kurangiSaldo = () => {
     let input = prompt("Masukkan Jumlah Saldo yang Ingin Dikurangi :")
      if (!isNaN(input)) {
        if (input <= saldo) {
          saldo -= parseInt(input)
          updateSaldo(saldo);
          console.log("Saldo Anda Berhasil Dikurangi. Saldo saat ini: " + saldo)
          alert("Saldo Anda Berhasil Dikurangi. Saldo saat ini: " + saldo)
        } else {
          alert("Maaf Saldo Anda tidak Mencukupi.")
        }
      } else {
        alert("Silahkan Input Saldo yang Benar")
      }
    }