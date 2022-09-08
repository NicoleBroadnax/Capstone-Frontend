import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Services.scss";

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
    <div id="page">
      <h1>{type}</h1>
      <div className="container" id="cardContainer">
        {services.map((service) => {
          return (
            <div key={service.id}>
              <div
                className="card border-primary mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted" id="MentalHS">
                    Mental Health Services
                  </h6>
                  <p className="card-text">
                    {service.description}
                    <button className="btn btn-primary">
                      <Link to={`/service/${service.id}`} className="card-link">
                        Review
                      </Link>
                    </button>
                    <button className="btn btn-primary">
                      {" "}
                      <a href={service.website} className="card-link">
                        Offical Site
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
