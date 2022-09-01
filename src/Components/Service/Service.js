import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import APIUrl from "../../APIUrl";
import Comment from "../Comment";

//import useParams from react-router-dom
//import useState from react
const Service = () => {
  const [service, setService] = useState(); //create state to store serivce
  const [content, setContent] = useState();
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

  const createNewComment = () => {
    
  };

  if (!service) {
    //if(!store){
    return <h1>Loading</h1>; //   return <h1>Loading</h1>
  } // }

  return (
    <div>
      <h1>service</h1>
      {service.comments.map((comment) => {
        return (
          <div key={comment.rating}>
            {comment.content}
            <p>{comment.serviceid}</p>
          </div>
        );
      })}
      <form onSubmit={createNewComment}>
        <label>Content</label>
        <input
          type="text"
          className="form-control"
          value={content}
          onChange={(evt) => {
            setContent(evt.target.value);
          }}
        />
        <br />
        <label>Post Content:</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(evt) => {
            setContent(evt.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default Service;

{
  /* <div>
<h1>{service.name}</h1>
</div> */
}
