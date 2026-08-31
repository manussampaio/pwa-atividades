function mostrarDisciplina() {
    const disciplina = document.getElementById("nomeDisciplina").value;
    document.getElementById("resultado").innerText = disciplina;
}

function somar() {
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const parseFloat1 = parseFloat(valor1)
    const parseFloat2 = parseFloat(valor2)

    document.getElementById("resultado2").innerText = parseFloat1 + parseFloat2;
}

function verNota() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;
    const nota4 = document.getElementById("nota4").value;
    const parse1 = parseFloat(nota1)
    const parse2 = parseFloat(nota2)
    const parse3 = parseFloat(nota3)
    const parse4 = parseFloat(nota4)

    const media = ((parse1 + parse2 + parse3 + parse4)/4);

    if (media > 6){
        document.getElementById("resultado3").innerText = (`Aprovado! - Media Final: ${media}`);
    } else {
        document.getElementById("resultado3").innerText = (`Reprovado! - Media Final: ${media}`);
    }
}

function tabuada() {
    const numero = document.getElementById("numero").value;
    const parseInt = parseInt(numero)

    

    document.getElementById("resultado2").innerText = parseFloat1 + parseFloat2;
}