import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Home.css";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="body">
        {data &&
          data.map((n, id) => {
            return (
              <div key={id}>
                <img src={n.image} alt=" not found" />
                <h6>{n.title}</h6>
                <h4>{n.category}</h4>
                <h4>{n.price}</h4>
                <button className="bttn" onClick={handleClick}>
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
