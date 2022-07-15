class AlunosView {
  constructor (table) {
    this.tableList = table
    this.tableHeader = this.tableList.querySelector("thead")
    this.tableBody = this.tableList.querySelector("tbody")
    this.materias = ["portugues", "matematica", "historia", "ciencias"]

    this.renderHeader()
  }
  
  renderHeader(){
    // Inserir no thead o nome e cada uma das matérias
    const htmlHeader = document.createElement('tr')
    htmlHeader.innerHTML = '<td>Nome</td>'

    let htmlHeaderMaterias = this.materias.map(materia => {
        console.log(materia)
        return '<td>' + materia + '</td>'
      })
      .join('')

    htmlHeader.innerHTML += htmlHeaderMaterias

    this.tableHeader.appendChild(htmlHeader)
  }

  // percorre cada aluno e gera html para incluir no TBODY
  render(alunos){
    //document.querySelector('.data-table-medias').innerHTML = ''
    alunos.forEach(aluno => {
      const htmlBody = document.createElement('tr')
      let htmlMedias = `<td>${aluno.nome}</td>`
      this.materias.forEach(materia => {
        htmlMedias += `<td>${aluno.media[materia]}</td>`
      })
      htmlBody.innerHTML = htmlMedias
      this.tableBody.appendChild(htmlBody)
    })
  }
}
