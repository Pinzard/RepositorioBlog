import React, { useEffect, useState } from "react";
import "./Home.css";

import { PostsCentrales } from "./PostsCentrales";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos del servidor:", data);
        setPosts(data);
      })
      .catch((error) => console.error("Error al obtener los posts:", error));
  }, []);
  console.log("los posts", posts);

  const handleDeletePost = (postId) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este post?"
    );
    if (confirmDelete) {
      fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setPosts((prevPosts) =>
              prevPosts.filter((post) => post.id !== postId)
            );
            console.log("Post eliminado exitosamente");
            alert("¡Post borrado!");
          } else {
            console.error("Error al eliminar el post");
          }
        })
        .catch((error) => console.error("Error al eliminar el post:", error));
    }
  };

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  return (
    <div className="text-center">
      <section>
        {sortedPosts.map((post) => (
          <PostsCentrales
            key={post.id}
            post={post}
            handleDeletePost={handleDeletePost}
            posts={sortedPosts}
          />
        ))}
      </section>
    </div>
  );
};

export { Feed };
