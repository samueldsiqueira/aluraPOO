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

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const andre = new ClientePoupanca(
  "andre",
  "andre@email.com",
  "112233665544",
  100,
  200,
);

console.log(andre);

andre.depositar(5000);
andre.depositarPoupanca(10000);

console.log(andre);
