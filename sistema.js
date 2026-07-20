let alunos = [
    {nome: "Ana Júlia", notas: [7, 8, 10] },
    {nome: "Victor", notas: [8, 6, 9] }
];
function buscarAluno(nome) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
      return alunos[i]; 
    }
  }
  return undefined;
}
function calcularMedia(aluno){
    if(!aluno.notas || aluno.notas.length === 0){
        return 0;
    }
    let soma = 0; 
    for (let i = 0; i < aluno.notas.length; i++){
        soma += aluno.notas[i]
    }
    return soma / aluno.notas.length;

}
function situacao(media){
    if (media >= 6) {
        return "APROVADO"
    } else if (media >= 4) {
        return "RECUPERAÇÃO"
    } else {
        return "REPROVADO"
    }
}

