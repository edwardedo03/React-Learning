import React from "react";
import UseFetch from "./UseFetch";
// import "./FetchData.css";

const FetchData = () => {
  const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
  console.log(data);

  return (
    <>
      <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
      <ul className="list_data_main">
        {data &&
          data.map((e) => (
            <>
              <h3>{e.name}</h3>
              <p>{e.benefits}</p>
              <p>{e.importance}</p>
              <p>{e.best_time_to_intake}</p>
              <br />
              <img src={e.image} alt="" style={{ width: "200px" }} />
            </>
          ))}
      </ul>
    </>
  );
};

export default FetchData;
