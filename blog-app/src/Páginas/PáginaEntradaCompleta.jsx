import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EntradaCompleta } from "../Componentes/EntradaCompleta";
import { Header } from "../Componentes/Header";
import { Navigation } from "../Componentes/Navigation";
import { Footer } from "../Componentes/Footer";

export const PáginaEntradaCompleta = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error al obtener el post:", error);
      });

    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error al obtener los posts:", error);
      });
  }, [postId]);

  const handleDeletePost = async () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este post?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setPosts((prevPosts) => prevPosts.filter((p) => p.id !== postId));
          alert("¡Post borrado!");
          navigate("/");
        } else {
          console.error("Error al eliminar el post");
        }
      } catch (error) {
        console.error("Error al eliminar el post:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div
        className="container-fluid caja-entera text-center"
        style={{ width: "80%" }}
      >
        <Navigation />
        <main className="content">
          <EntradaCompleta
            post={post}
            posts={posts}
            handleDeletePost={handleDeletePost}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};
