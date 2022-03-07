const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["5591235498", "5521988743124", "2227224451"],
  dependentes: [
    { nome: "Sara Silva", parentesco: "filha", dataNas: "20/03/2011" },
    { nome: "Samia Maria", parentesco: "filha", dataNas: "04/01/2014" },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

// const porpsClientes = Object.keys(cliente);

// console.log(porpsClientes);

function oferecerSeguro(obj) {
  const porpsClientes = Object.keys(obj);
  if (porpsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}

oferecerSeguro(cliente);
