import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Gamepage = () => {
  const [detialData, setDetailData] = useState({ status: "idl" });
  const params = parseInt(useParams().id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDetailData({ status: "searching" });
        const res = await axios.get(
          `https://api.rawg.io/api/games/${params}/screenshots?key=a37944f6a2e049dabf0b546b70dd0218`
        );
        console.log(res);
        setDetailData({ status: "done", data: res.data.results });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [params]);
  console.log("detialPage", detialData);
  return (
    <div className="detailpage">
      {detialData.status === "done" &&
        detialData.data.map((detial) => {
          return (
            <div className="images-collection" key={detial.id}>
                <img src={detial.image} alt=""></img>
            </div>
          );
        })}
    </div>
  );
};

export default Gamepage;
