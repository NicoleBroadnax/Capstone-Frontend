import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//import useParams from react-router-dom
//import useState from react
const Service = () => {
  const [service, setService] = useState(); //create state to store serivce
  const params = useParams(); //add const params = useParams();
  useEffect(() => {
    //add useEffect

    const getService = async () => {
      //add async fucntion called getService
      const res = await fetch(`http://localhost:3001/service/${params.id}`); //fetch to /serivce/${params.id}
      const data = await res.json(); //json
      setService(data.service); //store in setService state
      console.log(data);
    };
    getService(); //call getService()
  }, []);
  if (!service) {
    //if(!store){
    return <h1>Loading</h1>; //   return <h1>Loading</h1>
  } // }

  return (
    <div>
      <h1>{service.name}</h1>
    </div>
  );
};

export default Service;
