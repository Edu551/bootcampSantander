const alunos = [
    {
        nome: "Eduardo",
        nota: 4,
        turma: "1A",
    },
    {
        nome: "João",
        nota: 7,
        turma: "2B",
    },
    {
        nome: "Debora",
        nota: 8,
        turma: "3C",
    },
    {
        nome: "Gabriela",
        nota: 10,
        turma: "4D",
    },
    {
        nome: "Maria",
        nota: 5,
        turma: "5E",
    },
];

function alunosAprovados(arr, mediaFinal) {
    let alunosAprovados = [];

    for (let i = 0; i < arr.length; i++) {
        // object destructuring, vai utilizar apenas as propriedades do objeto que vamos manipular naquele indice
        const { nota, nome } = arr[i];

        if (nota >= mediaFinal) {
            alunosAprovados.push(nome);
        }
    }

    return alunosAprovados;
}

console.log(alunosAprovados(alunos, 7));
