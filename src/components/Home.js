import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
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
              <h1 className="data" key={id}>
                <img src={n.image} alt=" not found" />
                <div className="card">
                  <h4>{n.title}</h4>
                  <p>{n.category}</p>
                  <h4>{n.price}</h4>
                </div>
              </h1>
            );
          })}
      </div>
    </>
  );
}

export default Home;
