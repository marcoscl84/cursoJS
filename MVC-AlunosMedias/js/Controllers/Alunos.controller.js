class AlunoController {
  constructor (service, view) {
    view.render(service.alunos)
    this.view = view
    this.service = service
  }

  add (aluno) {
    this.service.add(new AlunoModel(aluno)) //adiciona novo aluno
    this.view.render(this.service.alunos) // limpa toda a tabela e renderiza de novo
  }
}
