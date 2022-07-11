// Calcula média de cada aluno por materia e cria uma propriedade chamada média
alunos.forEach(aluno => {
  aluno.media = {}

  for (let materia in aluno.notas) {
    aluno.media[materia] = avarege(...aluno.notas[materia])
  }
})

console.log(alunos)

// Inserir no thead o nome e cada uma das matérias
const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

let htmlHeaderMaterias = Object.keys(alunos[0].notas)
  .map(materia => {
    console.log(materia)
    return '<td>' + materia + '</td>'
  })
  .join('')

htmlHeader.innerHTML += htmlHeaderMaterias
console.log(htmlHeader)

document.querySelector('.data-table-alunos').appendChild(htmlHeader)

// percorre cada aluno e gera html para incluir no TBODY
alunos.forEach(aluno => {
  const htmlBody = document.createElement('tr')
  let htmlMedias = `<td>${aluno.nome}</td>`
  Object.keys(aluno.notas).forEach(materia => {
    htmlMedias += `<td>${aluno.media[materia]}</td>`
  })
  htmlBody.innerHTML = htmlMedias
  document.querySelector('.data-table-medias').appendChild(htmlBody)
})
