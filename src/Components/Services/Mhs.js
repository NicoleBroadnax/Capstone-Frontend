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
          <div key={mhs.id}>
            {mhs.name}
            <p>{mhs.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Mhs;
