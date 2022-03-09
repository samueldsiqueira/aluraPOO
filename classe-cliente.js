class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.name = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(`Seu saldo é de ${this.saldo}`);
  }
}

const andre = new Cliente("andre", "andre@email.com", "112233665544", 100);

console.log(andre);
