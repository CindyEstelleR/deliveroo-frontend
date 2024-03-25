import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import "./assets/CSS/font.css";
import logo from "./assets/img/images/logo-teal.svg";

function App() {
  const [data, setData] = useState({});
  // le state isLoading permet de savoir si la réponse du serveur est arrivé
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-back--ztxyvw6t2bht.code.run"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="container">
        <img src={logo} />
      </header>
      {isLoading === true ? (
        <p>Chargement</p>
      ) : (
        <main>
          <h1>{data.restaurant.name}</h1>
        </main>
      )}
    </>
  );
}

export default App;
