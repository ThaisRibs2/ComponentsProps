class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("Harry Potter", "J.K Rowling");

function LivroComponente() {
  return (
    <>
      <h2>Livro 1</h2>
      <p>{livro1.titulo}</p>
      <p>{livro1.autor}</p>

      <h2>Livro 2</h2>
      <p>{livro2.titulo}</p>
      <p>{livro2.autor}</p>
    </>
  );
}

export default LivroComponente;