class Cnh {

  obterCnh(idade, statusProva) {
    if (idade >= 18 && statusProva === true) {
      return idade, statusProva;
    } else {
      return "Não pode tirar CNH";
    }
  }
}

module.exports = Cnh;
