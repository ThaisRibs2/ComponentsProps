class Animal {
  constructor(nome) {
    this.nome = nome;
  }
}

const animal1 = new Animal("Cachorro");
const animal2 = new Animal("Gato");
const animal3 = new Animal("Pássaro");

function AnimalComponente() {
  return (
    <>
      <h2>Animais</h2>
      <p>{animal1.nome}</p>
      <p>{animal2.nome}</p>
      <p>{animal3.nome}</p>
    </>
  );
}

export default AnimalComponente;