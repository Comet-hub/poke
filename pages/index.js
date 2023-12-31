import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();

  return (
    <li>
      <Link href={`pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemones({ pokemones }) {
  return (
    <>
      <h1>My App de Pokemones</h1>
      <ul>
        {pokemones.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};
