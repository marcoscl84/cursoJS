class AlunosView {
  constructor (table, materias) {
    this.tableList = table
    this.tableHeader = this.tableList.querySelector('thead')
    this.tableBody = this.tableList.querySelector('tbody')
    this.materias = ['portugues', 'matematica', 'historia', 'ciencias']

    this.renderHeader()
  }

  // Insere no thead o nome e cada uma das matérias na ordem (this.materias) definida no construtor acima
  renderHeader () {
    const htmlHeader = document.createElement('tr')
    htmlHeader.innerHTML = '<td>Nome</td>'

    let htmlHeaderMaterias = this.materias
      .map(materia => {
        return '<td>' + materia + '</td>'
      })
      .join('')

    htmlHeader.innerHTML += htmlHeaderMaterias

    this.tableHeader.appendChild(htmlHeader)
  }

  // percorre cada aluno e gera html para incluir no TBODY
  render (alunos) {
    this.tableBody.innerHTML = ''
    //document.querySelector('.data-table-medias').innerHTML = ''
    alunos.forEach(aluno => {
      const htmlBody = document.createElement('tr')
      let htmlMedias = `<td>${aluno.nome}</td>`
      let encontrado = false

      this.materias.forEach(materia => {
        if (materia in aluno.notas) {
          encontrado = true
        }
      })

      if (encontrado) {
        this.materias.forEach(materia => {
          htmlMedias += `<td>${
            aluno.media[materia] !== undefined
              ? aluno.media[materia]
              : `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`
          }</td>`
        })
      } else {
        htmlMedias += `<td colspan="${this.materias.length}">
          <a href="edit.html?id=${aluno._id}">Incluir Notas</a>
        </td>`
      }

      htmlBody.innerHTML = htmlMedias
      this.tableBody.appendChild(htmlBody)
    })
  }
}
