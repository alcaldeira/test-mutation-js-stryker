class Calculator {
    somaSubtracao(num1, num2, somaSubtracao) {
        if (somaSubtracao == "+") {
            return num1 + num2;
            
        } else if(somaSubtracao == "-") {
            return num1 - num2;
        }
        else {
            return "nenhuma das opcoes"
        }
    }
}

module.exports = Calculator