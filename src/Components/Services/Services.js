import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const getServices = async () => {
      const res = await fetch(`http://localhost:3001/services/food`);
      const data = await res.json();
      setServices(data.services);
    };
    getServices();
  }, []);

  return (
    <div>
      <h1>Services</h1>
      {services.map((service) => {
        return (
          <div key={service.id}>
            {service.name}
            <p>{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
