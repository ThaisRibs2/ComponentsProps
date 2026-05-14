class Lampada {
  constructor() {
    this.ligada = false;
  }

  ligar() {
    this.ligada = true;
    return "Lâmpada Ligada";
  }

  desligar() {
    this.ligada = false;
    return "Lâmpada Desligada";
  }
}

const lampada1 = new Lampada();

function LampadaComponente() {
  return (
    <>
      <h2>Lâmpada</h2>
      <p>{lampada1.ligar()}</p>
      <p>{lampada1.desligar()}</p>
    </>
  );
}

export default LampadaComponente;