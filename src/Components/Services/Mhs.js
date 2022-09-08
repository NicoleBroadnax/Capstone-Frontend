import { Link } from "react-router-dom";
import { Component } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mhs = () => {
  const [mhs, setMhs] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    const getMhs = async () => {
      const res = await fetch(`http://localhost:3001/services/${mhs}`);
      const data = await res.json();
      setMhs(data.mhs);
    };
    getMhs();
  }, [type]);

  return (
    <div>
      <h1>mhs</h1>
      {mhs.map((mhs) => {
        return (
          <div key={mhs.id} >
            <div className="card" style="width: 18rem;">
              <div className="card-body">
                <h5 className="card-title">{mhs.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">hello World</h6>
                <p className="card-text">
                  {mhs.description}
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mhs;

{
  /* <div key={mhs.id}>
  {mhs.name}
  <p>{mhs.description}</p>
</div>; */
}
