class Filme {
  constructor(titulo, anoLancamento) {
    this.titulo = titulo;
    this.anoLancamento = anoLancamento;
  }

  verificarFilme() {
    return 2026 - this.anoLancamento > 10;
  }
}

const filme1 = new Filme("Avatar", 2009);

function FilmeComponente() {
  return (
    <>
      <h2>Filme</h2>
      <p>{filme1.titulo}</p>
      <p>Tem mais de 10 anos? {filme1.verificarFilme().toString()}</p>
    </>
  );
}

export default FilmeComponente;