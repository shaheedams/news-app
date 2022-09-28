import React, { useState, useEffect } from "react";

const News = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines/sources?category="+props.cat+"&apiKey=fa73b29f678240f9a236617f52d68780"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.sources);
        console.log(res);
      });
  }, []);

  return (
      <div className="newsContainer">
          {
              data.map((e) => {
                  return (
                    <div key={e.id} className="card" style={{ width: "18rem" }}>
                      {/* <img src={e.} className="card-img-top" alt=""></img> */}
                      <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">{e.description}</p>
                        <a href={e.url} target="_blank" className="btn btn-primary">
                          Read more
                        </a>
                      </div>
                    </div>
                  );
              })
          }
    
    </div>
  );
};

export default News;
