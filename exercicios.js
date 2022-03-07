const colecionador = {
  nome: "Samuel",
  idade: 30,
  tipocolecao: ["contas", "dividas", "emprestimos"],
  contato: "pagoquandopuder@email.com",
  adicionarTipo: function (propriedade, tipo) {
    this[propriedade].push(tipo);
  },
};
for (i = 0; i < 4; i++) {
  colecionador.adicionarTipo("tipocolecao", "HQ" + i);
}

console.log(colecionador);
// console.log(
//   `o safado do ${colecionador.nome} deve e vai pagar todas as suas ${colecionador.tipocolecao},
//   caso contrario entre em contato com email ${colecionador.contato}`,
// );
