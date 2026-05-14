class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return `Olá, meu nome é ${this.nome}`;
  }
}

const pessoa1 = new Pessoa("Carlos");

function PessoaComponente() {
  return (
    <>
      <h2>Pessoa</h2>
      <p>{pessoa1.falar()}</p>
    </>
  );
}

export default PessoaComponente;