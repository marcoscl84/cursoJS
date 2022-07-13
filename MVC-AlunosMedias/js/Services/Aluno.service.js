class AlunosService {
  constructor () {
    this.alunos = []
  }

  add (aluno) {
    if (!aluno instanceof AlunoModel) {
      throw TypeError('aluno must be an instance of AlunoMOdel')
    }
    this.alunos.push(aluno)
  }

  edit (aluno) {
    return aluno
  }
}
