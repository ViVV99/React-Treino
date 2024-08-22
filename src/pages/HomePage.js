import "./App.css";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";

import axios from "../services/default";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    // This syntax makes so we can call async functions
    // inside useEffect :)
    (async () => {
        const data = await axios.get("pokemon/?offset=20&limit=10");
        setPokemonList(data.data.results);
    })();
  }, []);

  return (
    <div className="main">
      <h1>Meu Nome e Vitor</h1>

      <p>Lista de pokemons</p>
      <Cards data={pokemonList} />
    </div>
  );
}

export default HomePage;
