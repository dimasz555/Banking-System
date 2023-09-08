class BankAccount {
  constructor() {
    this.saldo = 0;
  }

  deposit(input) {
    setTimeout(() => {
      this.saldo += input;
      console.log(`Deposit sebesar ${input} sukses, saldo sebesar ${this.saldo} `);
    }, 2000);
  }

  withdraw(input) {
    setTimeout(() => {
      if (input <= this.saldo) {
        this.saldo -= input;
        console.log(`Withdraw sebesar ${input} sukses, saldo sebesar ${this.saldo}`);
      } else {
        console.log("Saldo tidak cukup");
      }
    }, 3000);
  }
}


const user = new BankAccount();

function formDeposit() {
  let input =parseFloat(prompt("Masukkan Jumlah Saldo :"));
  if (!isNaN(input)) {
    user.deposit(input);
    updateSaldo(saldo);
  } else {
    console.log("Input tidak valid. Mohon masukkan angka.");
  }
}

function formWithdrawal() {
  let input =parseFloat(prompt("Masukkan Jumlah Saldo :"));
  if (!isNaN(input)) {
    user.withdraw(input);
    updateSaldo(saldo);
  } else {
    console.log("Input tidak valid. Mohon masukkan angka.");
  }
}

// formDeposit();
// formWithdrawal();
