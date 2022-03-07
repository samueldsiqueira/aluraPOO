const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["5591235498", "5521988743124", "2227224451"],
};

cliente.dependentes = {
  nome: "sara",
  parentesco: "filha",
  dataNas: "20/03/2011",
};

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";  

console.log(cliente);