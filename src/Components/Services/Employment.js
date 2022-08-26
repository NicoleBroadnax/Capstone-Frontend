import { Link } from "react-router-dom";
import { Component } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Employment = () => {
  const [Employment, setEmployment] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    const getEmployment = async () => {
      const res = await fetch(`http://localhost:3001/services/${type}`);
      const data = await res.json();
      setEmployment(data.Employment);
    };
    getEmployment();
  }, [type]);

  return (
    <div>
      <h1>Employment</h1>
      {Employment.map((Employment) => {
        return (
          <div key={Employment.id}>
            {Employment.name}
            <p>{Employment.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Employment;
