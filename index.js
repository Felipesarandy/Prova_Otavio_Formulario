document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const tabelaBody = document.querySelector('#tabela tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const matricula = document.getElementById('matricula').value;
        const nota1 = document.getElementById('nota1').value;
        const nota2 = document.getElementById('nota2').value;

        if (isDecimal(nota1) && isDecimal(nota2)) {
            const media = ((parseFloat(nota1) + parseFloat(nota2)) / 2).toFixed(2);
            const situacao = media >= 5 ? 'Aprovado' : 'Reprovado';

            const novoAluno = {
                nome,
                matricula,
                nota1,
                nota2,
                media,
                situacao
            };

            adicionarAlunoTabela(novoAluno);
            form.reset();
        } else {
            alert('Insira valores válidos para Nota 1 e Nota 2.');
        }
    });

    function isDecimal(value) {
        const regex = /^\d+(\.\d+)?$/;
        return regex.test(value);
    }

    function adicionarAlunoTabela(aluno) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.matricula}</td>
            <td>${aluno.nota1}</td>
            <td>${aluno.nota2}</td>
            <td>${aluno.media}</td>
            <td>${aluno.situacao}</td>
        `;

        tabelaBody.appendChild(tr);
    }
});
