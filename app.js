// EXERCÍCIO 1
function mostrarDisciplina() {
    const disciplina = document.getElementById("nomeDisciplina").value;
    document.getElementById("resultado1").innerText = disciplina;
}

// EXERCÍCIO 2
function somar() {
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const parseFloat1 = parseFloat(valor1)
    const parseFloat2 = parseFloat(valor2)

    document.getElementById("resultado2").innerHTML = parseFloat1 + parseFloat2;
}

// EXERCÍCIO 3
function verNota() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;
    const nota4 = document.getElementById("nota4").value;
    const parse1 = parseFloat(nota1)
    const parse2 = parseFloat(nota2)
    const parse3 = parseFloat(nota3)
    const parse4 = parseFloat(nota4)

    const media = ((parse1 + parse2 + parse3 + parse4) / 4);

    if (media > 6) {
        document.getElementById("resultado3").innerText = (`Aprovado! - Media Final: ${media}`);
    } else {
        document.getElementById("resultado3").innerText = (`Reprovado! - Media Final: ${media}`);
    }
}


// EXERCÍCIO 5
function atividade5() {
    const numero = parseInt(document.getElementById("tabuada").value);

    if (isNaN(numero)) {
        document.getElementById("r5").innerText = "Digite um número inteiro.";
        return;
    }

    let texto = "";
    for (let i = 0; i <= 10; i++) {
        texto += `${numero} x ${i} = ${numero * i}\n`;
    }

    document.getElementById("resultado5").innerText = texto;
}

// EXERCÍCIO 6
let valores = [];

function atividade6() {
    const valor = parseFloat(document.getElementById("valorMaior").value);
    const resultado = document.getElementById("resultado6");


    if (valor === -1) {
        if (valores.length === 0) {
            resultado.innerText = "Nenhum valor positivo foi informado.";
            return;
        }

        const maior = Math.max(...valores);
        resultado.innerText = `Valores digitados: ${valores.join(", ")} | Maior valor: ${maior}`;
        valores = [];
        document.getElementById("valorMaior").value = "";
        return;
    }

    if (valor > 0) {
        valores.push(valor);
        resultado.innerText = `Valores armazenados: ${valores.join(", ")}`;
    } else {
        resultado.innerText = "Digite apenas valores positivos ou -1 para finalizar.";
    }

    document.getElementById("valorMaior").value = "";
}

// EXERCÍCIO 7
function atividade7() {
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const impares = vetor.filter(num => num % 2 !== 0);

    document.getElementById("resultado7").innerText = `Ímpares: ${impares.join(", ")}`;
}

// EXERCÍCIO 8
function atividade8() {
    const nome = document.getElementById("nome").value.trim();

    if (nome === "") {
        document.getElementById("resultado8").innerText = "Digite seu nome.";
        return;
    }

    const invertido = nome.split("").reverse().join("");
    document.getElementById("resultado8").innerText = `Nome ao contrário: ${invertido}`;
}
// EXERCÍCIO 9

let funcionarios = [];

function adicionarFuncionario() {
    let nome = document.getElementById("funcNome").value;
    let idade = parseInt(document.getElementById("funcIdade").value);
    let sexo = document.getElementById("funcSexo").value;
    let salario = parseFloat(document.getElementById("funcSalario").value);

    if (nome === "" || isNaN(idade) || sexo === "" || isNaN(salario)) {
        document.getElementById("resultado9").innerText =
            "Preencha todos os campos.";
        return;
    }

    let funcionario = {
        nome: nome,
        idade: idade,
        sexo: sexo,
        salario: salario
    };

    funcionarios.push(funcionario);

    document.getElementById("resultado9").innerText =
        "Funcionários cadastrados: " + funcionarios.length;

    document.getElementById("funcNome").value = "";
    document.getElementById("funcIdade").value = "";
    document.getElementById("funcSexo").value = "";
    document.getElementById("funcSalario").value = "";
}

function mostrarFuncionarios() {

    const salarioMinimo = 1621;

    let resultado = "";

    for (let i = 0; i < funcionarios.length; i++) {

        if (funcionarios[i].salario > salarioMinimo) {
            resultado +=
                funcionarios[i].nome +
                " - R$ " +
                funcionarios[i].salario.toFixed(2) +
                "\n";
        }
    }

    if (resultado === "") {
        resultado = "Nenhum funcionário ganha mais que o salário mínimo.";
    }

    document.getElementById("resultado9").style.whiteSpace = "pre-line";
    document.getElementById("resultado9").innerText = resultado;
}


// EXERCÍCIO 10

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcular(operacao) {

    let a = parseFloat(document.getElementById("op1").value);
    let b = parseFloat(document.getElementById("op2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultado10").innerText =
            "Digite os dois números.";
        return;
    }

    let resultado;

    if (operacao === "somar") {
        resultado = somar(a, b);
    }

    if (operacao === "subtrair") {
        resultado = subtrair(a, b);
    }

    if (operacao === "multiplicar") {
        resultado = multiplicar(a, b);
    }

    if (operacao === "dividir") {

        if (b === 0) {
            document.getElementById("resultado10").innerText =
                "Não é possível dividir por zero.";
            return;
        }

        resultado = dividir(a, b);
    }

    document.getElementById("resultado10").innerText =
        "Resultado: " + resultado;
}
