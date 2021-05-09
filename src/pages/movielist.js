import React, { useEffect } from "react";
import axios from "axios";
const Movielist = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?s=face&apikey=cb6555db"
        );
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default Movielist;
