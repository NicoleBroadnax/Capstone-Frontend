import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import APIUrl from "../../APIUrl";

//import useParams from react-router-dom
//import useState from react
const Service = () => {
  const [service, setService] = useState(); //create state to store serivce
  const [content, setContent] = useState("");

  const params = useParams(); //add const params = useParams();

  const getService = async () => {
    //add async fucntion called getService
    const res = await fetch(`http://localhost:3001/service/${params.id}`); //fetch to /serivce/${params.id}
    const data = await res.json(); //json
    setService(data.service); //store in setService state
    console.log(data);
  };

  useEffect(() => {
    //add useEffect
    getService(); //call getService()
  }, []);

  const createNewComment = async (evt) => {
    evt.preventDefault();

    const res = await fetch(`${APIUrl}/comment/${params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
      credentials: "include",
    });
    getService();
  };

  if (!service) {
    //if(!store){
    return <h1>Loading</h1>; //   return <h1>Loading</h1>
  } // }

  return (
    <div>
      <h1>service</h1>
      <img src={service.Image} />
      {service.comments.map((comment) => {
        return (
          <div key={comment.rating}>
            {comment.content}
            <p>{comment.serviceid}</p>
          </div>
        );
      })}
      <form onSubmit={createNewComment}>
        <label>Service Review :</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(evt) => {
            setContent(evt.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit" className="btn btn-primary">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Service;
