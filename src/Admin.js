import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import APIUrl from "./APIUrl";

const Admin = () => {
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  //const params = useParams();

  const getComments = async () => {
    const response = await fetch(`${APIUrl}/comments`);
    const data = await response.json();
    setComments(data);
    console.log(data.comments);
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const response = await fetch(`${APIUrl}/loginStatus`, {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (data.isLoggedIn) {
        getComments();
      } else {
        navigate("/login");
      }
    };
    checkLoginStatus();
  }, []);

  const deleteComment = async (id) => {
    if (window.confirm("You sure ya wanna delete this?")) {
      await fetch(`${APIUrl}/comment/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      getComments();
    }
  };

  return (
    <div>
      <h1>Admin</h1>
      <span
        onClick={async () => {
          await fetch(`${APIUrl}/logout`, { credentials: "include" });
          navigate("/login");
        }}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Logout
      </span>
      {" | "}
      <Link to="admin/comments/new">New Comments</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Comments</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            return (
              <tr key={comment.id}>
                <td>{comment.content}</td>
                <td>
                  <Link to={`admin/comments/${comment.id}`}>Edit</Link>
                </td>
                <td>
                  <span
                    onClick={() => {
                      deleteComment(comment.id);
                    }}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
