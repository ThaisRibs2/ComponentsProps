class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(porcentagem) {
    return this.preco - (this.preco * porcentagem / 100);
  }
}

const produto1 = new Produto("Notebook", 3000);

function ProdutoComponente() {
  return (
    <>
      <h2>Produto</h2>
      <p>{produto1.nome}</p>
      <p>Preço com desconto: R$ {produto1.aplicarDesconto(10)}</p>
    </>
  );
}

export default ProdutoComponente;