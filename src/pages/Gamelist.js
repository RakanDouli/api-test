import React, { useEffect, useState } from "react";
import axios from "axios";
import Gamecard from "../components/Gamecard";
const Gamelist = () => {
  const [gameList, setGameList] = useState({ status: "idle" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setGameList({ status: "searching" });
        const response = await axios.get(
          "https://api.rawg.io/api/games?key=a37944f6a2e049dabf0b546b70dd0218"
          // "https://api.rawg.io/api/games?key=a37944f6a2e049dabf0b546b70dd0218&dates=2019-10-10,2020-10-10&ordering=-added"
        );
        console.log(response.data.results);
        setGameList({ status: "done", data: response.data.results });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  console.log("gamelist", gameList.data);
  return (
    <div>
      <div className="card-section">
        {gameList.status === "done" &&
          gameList.data.map((game) => {
            return (
              <Gamecard
                name={game.name}
                id={game.id}
                image={game.background_image}
                released={game.released}
                key={game.id}></Gamecard>
            );
          })}
      </div>
    </div>
  );
};

export default Gamelist;
// a37944f6a2e049dabf0b546b70dd0218 key
// details api
// https://api.rawg.io/api/games/$%7Bid%7D/screenshots?key=a37944f6a2e049dabf0b546b70dd0218
