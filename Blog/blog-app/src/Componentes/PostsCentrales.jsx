import React from "react";
import { Link } from "react-router-dom";
import "./PostsCentrales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/es";

const PostsCentrales = ({ post, handleDeletePost, posts }) => {
  const handleDelete = () => {
    handleDeletePost(post.id);
  };

  const imageUrl = `${post.imagen_url}`;

  const formattedDate = moment(post.fecha).format("LLL");

  return (
    <article
      className="article-container container-fluid"
      style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
    >
      <Link
        to={`/entrada/${post.id}`}
        state={{ post, posts }}
        className="post-link"
      >
        <div className="post-image-container">
          <img src={imageUrl} alt="Post" className="post-image" />
        </div>
      </Link>
      <div
        className="post-content2"
        style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }}
      >
        <h2>
          <Link
            to={`/entrada/${post.id}`}
            state={{ post, posts }}
            className="post-title-link"
          >
            {post.titulo}
          </Link>
        </h2>
        <p>{formattedDate}</p>
        <p>{post.contenido && post.contenido.substring(0, 50)}</p>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </article>
  );
};

export { PostsCentrales };
