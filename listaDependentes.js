const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["5591235498", "5521988743124", "2227224451"],
  dependentes: [
    {
      nome: "Sara Silva",
      parentesco: "filha",
      dataNas: "20/03/2011",
    },
  ],
};

cliente.dependentes.push({
  nome: "Samia Maria",
  parentesco: "filha",
  dataNas: "04/01/2014",
});

console.log(cliente);

// const filhaMaisNova = cliente.dependentes.filter(
//   (dependente) => dependente.dataNas === "04/01/2014",
// );

// console.log(filhaMaisNova[0].nome);
