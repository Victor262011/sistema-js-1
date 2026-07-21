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

function cadastrarAluno(){
    let nome = prompt("Digite o nome do aluno: ")

    if (!nome){
        alert("Nome inválido!")
        return
    }
    let alunoExistente = buscarAluno(nome)
    if(alunoExistente){
        alert("Aluno já cadastrado!")
        return
    }
    alunos.push({nome: nome, notas: []})
    alert(`Aluno ${nome} cadastrado com sucesso!`);
}

function listarAlunos() {
    if (alunos.length === 0){
        alert("Nenhum aluno cadastrado.")
        return
    }
    let texto = "--- LISTA DE ALUNOS ---\n";
  for (let i = 0; i < alunos.length; i++) {
    texto += `- ${alunos[i].nome}\n`;
  }

  alert(texto);
}
function removerAluno() {
  let nome = prompt("Digite o nome do aluno que deseja remover:");
  
  let aluno = buscarAluno(nome);
  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }
  let posicao = alunos.indexOf(aluno);
  alunos.splice(posicao, 1);
  alert(`Aluno "${aluno.nome}" removido com sucesso!`);
}
function lancarNota(){
  let nome = prompt("Digite o nome do aluno: ")
  let aluno = buscarAluno(nome)

  if (!aluno){
    alert("Aluno não encontrado!")
    return
  }
  let nota = Number(prompt(`Digite a nota para ${aluno.nome} (entre 0 e 10): `))

  if (isNaN(nota) || nota < 0 || nota > 10){
    alert("Nota inválida! A nota deve ser um número entre 0 e 10. ")
    return
  }
  
  aluno.notas.push(nota);
  alert(`Nota ${nota} lançada com sucesso para ${aluno.nome}!`)
}

function verBoletim(){
  let nome = prompt("Digite o nome do aluno: ")
  let aluno = buscarAluno(nome)

  if (!aluno){
    alert("Aluno não encontrado!")
    return
  }
  let media = calcularMedia(aluno)
  let status = situacao(media)

  let listaNotas = aluno.notas.length > 0 ? aluno.notas.join(", ") : "Nenhuma nota lançada"
  let mediaFormatada = media.toFixed(2)

  let mensagem = `      BOLETIM DO ALUNO     \n
                  Nome: ${aluno.nome}\n
                  Notas: ${listaNotas}\n
                  Média: ${mediaFormatada}\n
                  Situação: ${status}\n`
  
  alert(mensagem)
}
