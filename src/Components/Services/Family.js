import { Link } from "react-router-dom";
import { Component } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Family = () => {
  const [family, setFamily] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    const getFamily = async () => {
      const res = await fetch(`http://localhost:3001/Family/${type}`);
      const data = await res.json();
      setFamily(data.family);
    };
    getFamily();
  }, [type]);

  return (
    <div>
      <h1>Family</h1>
      {Family.map((family) => {
        return (
          <div key={family.id}>
            {family.name}
            <p>{family.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Family;
