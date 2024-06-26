function pressionarConsole(){

function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++ ) {
        fatorial *= i;
    }
    
    return fatorial;
}

let numero = prompt('Digite um número para calcularmos o fatorial:');
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
}

function pressionarAlert() {

    function calcularDolar(valorEmDolar) {
      let cotacaoDolar = 5.45;
      let valorEmReais = valorEmDolar * cotacaoDolar;
      return valorEmReais.toFixed(2);
    }

    let valorEmDolar = prompt('Digite um valor para convertermos:');
    let convercao = calcularDolar(valorEmDolar);
    
    let sintaxeDolar = valorEmDolar > 1 ? 'Dolares' : 'Dolar';
    let sintaxeReal = convercao > 1 ? 'Reais': 'Real';

    console.log(`${valorEmDolar} ${sintaxeDolar} em Real é igual a: ${convercao} ${sintaxeReal}`);
}

function pressionarPrompt() {
    function calculoAreaPerimetroRentagulo(altura, largura) {
        let area = altura * largura;
        let perimetro = 2 * (Number(altura) + Number(largura));
        
        console.log(`A área da sala é de ${area} metros quadrados!`);
        console.log(`O perímetro da sala é de ${perimetro} metros!`);

    }

    let altura = prompt('Informe a altura da sua sala:');
    let largura = prompt('Informe a largura da sua sala:');

    calculoAreaPerimetroRentagulo(altura, largura);
}

function pressionarSoma() {
    function calculaAreaPerimetroCirculo(raio) {
        let pi = 3.14;
        let areaCirculo = pi * (raio * raio);
        let perimetroCirculo = 2 * (pi * raio);

        console.log(`A área da sala é de ${areaCirculo} metros quadrados!`);
        console.log(`O perímetro da sala é de ${perimetroCirculo} metros!`);

    }

    let raio = prompt('Informe a medida do raio da sua sala circular:');

    calculaAreaPerimetroCirculo(raio);

}

function pressionarMultiplicar() {
    function tabuada(numero) {
        for(let i = 1; i <= 10; i++){
            let resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
    }

    let numero = prompt('Informe um número para ver a sua tabuada:');
    tabuada(numero);
}