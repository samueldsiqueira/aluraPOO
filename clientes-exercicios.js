const clientes = [
  {
    nome: "andré",
    cpf: "12312312312",
    dependentes: [
      {
        nome: "Samia",
        parentesco: "Filha",
        dataNasc: "04/01/2014",
      },
      {
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011",
      },
    ],
  },
  {
    nome: "Juliana",
    cpf: "56756756756",
    dependentes: [
      {
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020",
      },
    ],
  },
];

const listaDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
];

console.table(listaDependentes);
