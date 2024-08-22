import React from "react";

import Card from "./Card";
import "./Cards.css";

export default function Cards({ data }) {
  return (
    <div className="cardList">
      {data &&
        data.length > 0 &&
        data.map((item) => {
            
            let title = item.name;
            let link = '/pokemons/' + item.name;

          return <Card title={title} link={link} />
        })}
      {!data && <div>Sem dados agora</div>}
    </div>
  );
}
