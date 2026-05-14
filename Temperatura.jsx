class Temperatura {
  constructor(celsius) {
    this.celsius = celsius;
  }

  paraFahrenheit() {
    return (this.celsius * 9/5) + 32;
  }
}

const temp1 = new Temperatura(30);

function TemperaturaComponente() {
  return (
    <>
      <h2>Temperatura</h2>
      <p>{temp1.paraFahrenheit()} °F</p>
    </>
  );
}

export default TemperaturaComponente;