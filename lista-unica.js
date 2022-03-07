const clientes = [
  {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["5591235498", "5521988743124", "2227224451"],
    dependentes: [
      {
        nome: "Sara Silva Alves Alves",
        parentesco: "filha",
        dataNas: "20/03/2011",
      },
      {
        nome: "Samia Maria Silva Alves",
        parentesco: "filha",
        dataNas: "04/01/2014",
      },
    ],
  },
  {
    nome: "Samuel",
    idade: 30,
    cpf: "06094927729",
    email: "samueldsiqueira@gmail.com",
    fones: ["22992335107", "2227224451"],
    dependentes: [
      {
        nome: "icaro Almeida Barreto",
        parentesco: "filho",
        dataNas: "20/10/2019",
      },
      {
        nome: "Kamilly Almeida Barreto",
        parentesco: "cônjuje",
        dataNas: "16/03/1992",
      },
    ],
  },
];

const listaDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
];

console.table(listaDependentes);
