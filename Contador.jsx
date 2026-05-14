class Contador {
  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
    return this.valor;
  }

  decrementar() {
    this.valor--;
    return this.valor;
  }
}

const contador1 = new Contador();

function ContadorComponente() {
  return (
    <>
      <h2>Contador</h2>
      <p>Incremento: {contador1.incrementar()}</p>
      <p>Decremento: {contador1.decrementar()}</p>
    </>
  );
}

export default ContadorComponente;