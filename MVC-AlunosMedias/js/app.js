const alunos = [
  {
    _id: 0,
    nome: 'chico melato',
    notas: {
      portugues: [1, 1, 2, 2],
      matematica: [2, 2, 2, 2],
      historia: [2, 2, 3, 3],
      ciencias: [3, 3, 3, 3]
    }
  },
  {
    _id: 1,
    nome: 'talita lima',
    notas: {
      portugues: [4, 4, 4, 4],
      matematica: [4, 4, 5, 5],
      historia: [5, 5, 6, 6],
      ciencias: [7, 7, 8, 9]
    }
  }
]

const alunosService = new AlunosService()

// Calcula média de cada aluno por materia e cria uma propriedade chamada média
alunos.forEach(aluno => {
  alunosService.add(new AlunoModel(aluno)) // adiciona aluno direto sem passar pelo controller
})

const alunosView = new AlunosView(document.querySelector('.data-table-alunos'))

const alunosController = new AlunosController(alunosService, alunosView)

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault() // função para o form não ser enviado
  const nome = document.getElementById('first_name').value

  alunosController.add({ nome })
})

/* 

TODAS AS FUNÇÕES ABAIXO SERÃO DE RESPONSABILIDADE DA VIEW

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

document.querySelector('.data-table-alunos thead').appendChild(htmlHeader)

// percorre cada aluno e gera html para incluir no TBODY
function render () {
  document.querySelector('.data-table-medias').innerHTML = ''
  alunos.forEach(aluno => {
    const htmlBody = document.createElement('tr')
    let htmlMedias = `<td>${aluno.nome}</td>`
    Object.keys(aluno.notas).forEach(materia => {
      htmlMedias += `<td>${aluno.media[materia]}</td>`
    })
    htmlBody.innerHTML = htmlMedias
    document.querySelector('.data-table-alunos tbody').appendChild(htmlBody)
  })
}
render()

// Acionando alunos
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault() //para form não ser enviado
  const nome = document.getElementById('first_name').value
  const newAluno = {
    _id: 0,
    nome,
    notas: {
      portugues: [1, 1, 2, 2],
      matematica: [2, 2, 2, 2],
      historia: [2, 2, 3, 3],
      ciencias: [3, 3, 3, 3]
    }
  }

  newAluno.media = {}

  for (let materia in newAluno.notas) {
    newAluno.media[materia] = avarege(...newAluno.notas[materia])
  }

  alunos.push(newAluno)

  render()
})
 */
