class Carro {
  constructor(marca) {
    this.marca = marca;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
    return this.velocidade;
  }
}

const carro1 = new Carro("Ford");

function CarroComponente() {
  return (
    <>
      <h2>Carro</h2>
      <p>Marca: {carro1.marca}</p>
      <p>Velocidade: {carro1.acelerar()} km/h</p>
    </>
  );
}

export default CarroComponente;