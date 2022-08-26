import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    const getServices = async () => {
      const res = await fetch(`http://localhost:3001/services/${type}`);
      const data = await res.json();
      setServices(data.services);
    };
    getServices();
  }, [type]);

  return (
    <div>
      <h1>Services</h1>
      {services.map((service) => {
        return (
          <div key={service.id}>
            {service.name}
            <p> {service.category}</p>
            <p>{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
