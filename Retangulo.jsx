class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

const retangulo1 = new Retangulo(10, 5);

function RetanguloComponente() {
  return (
    <>
      <h2>Retângulo</h2>
      <p>Área: {retangulo1.calcularArea()}</p>
    </>
  );
}

export default RetanguloComponente;