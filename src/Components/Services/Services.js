import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">hello World</h6>
                <p className="card-text">
                  {service.description}
                  <Link to={`/service/${service.id}`} className="card-link">
                    Card link
                  </Link>
                  <a href={service.website} className="card-link">
                    Offical Site
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

export default Services;
