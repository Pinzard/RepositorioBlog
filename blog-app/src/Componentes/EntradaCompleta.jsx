import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faTimes,
  faEdit,
  faTrash,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/es";
import "./EntradaCompleta.css";

const EntradaCompleta = ({ handleDeletePost }) => {
  const location = useLocation();
  const { post, posts } = location.state;

  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.titulo);
  const [editedContent, setEditedContent] = useState(post.contenido);
  const [editedImage, setEditedImage] = useState(post.imagen);
  const [imageUrl, setImageUrl] = useState("");
  const [newImage, setNewImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPost = posts.find((p) => p.id === post.id);
    if (currentPost) {
      setEditedContent(currentPost.contenido);
    }
  }, [posts, post.id]);

  const handleEdit = () => {
    setEditMode(true);
    setEditedTitle(post.titulo);
    setEditedContent(post.contenido);
    setEditedImage(post.imagen);
    setImageUrl("");
    setNewImage(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedContent("");
    setNewImage(null);
  };

  const handleUpdatePost = async () => {
    const updatedPost = {
      ...post,
      titulo: editedTitle,
      contenido: editedContent,
      imagen: newImage || editedImage,
    };

    const postId = updatedPost.id;

    const endpoint = `http://localhost:3000/posts/${postId}`;

    const formData = new FormData();
    formData.append("titulo", updatedPost.titulo);
    formData.append("contenido", updatedPost.contenido);
    formData.append("image", newImage);

    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      console.log("Respuesta del servidor:", data);
    } catch (error) {
      console.error("Error al enviar el post al servidor:", error);
    }

    setEditMode(false);
    setEditedContent("");
    setEditedTitle("");
    setEditedImage("");
    setNewImage(null);

    navigate("/");
  };

  const handleDelete = () => {
    handleDeletePost(post.id);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setNewImage(selectedImage);

      const imageUrl = URL.createObjectURL(selectedImage);
      setImageUrl(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setNewImage(null);
    setImageUrl("");
  };

  const formattedDate = moment(post.fecha).format("LLL");

  return (
    <div className="container caja-entera text-center">
      <div className="content">
        <div>
          <img className="image-fluid" src={`${post.imagen_url}`} alt="Post" />

          {editMode ? (
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    value={editedTitle}
                    onChange={(e) =>
                      setEditedTitle(e.target.value.slice(0, 40))
                    }
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Contenido"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    style={{
                      height: "300px",
                      overflow: "hidden",
                      resize: "none",
                    }}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="imageInput" className="visually-hidden">
                    Seleccionar imagen
                  </label>
                  <input
                    type="file"
                    id="imageInput"
                    className="file-input"
                    name="image"
                    onChange={handleImageChange}
                  />
                </div>

                {newImage && (
                  <div className="form-group">
                    <img
                      src={imageUrl}
                      alt="Vista previa de la imagen"
                      style={{ maxWidth: "200px" }}
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="btn btn-danger"
                      style={{ marginTop: "1%" }}
                    >
                      <FontAwesomeIcon icon={faTimesCircle} /> Quitar imagen
                    </button>
                  </div>
                )}
              </div>
              <div className="col-md-4"></div>
            </div>
          ) : (
            <div>
              <h1>{post.titulo}</h1>
              <p>{formattedDate}</p>

              <div className="post-content">
                {post.contenido.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {editMode ? (
            <div>
              <button
                onClick={handleUpdatePost}
                className="btn btn-primary"
                style={{
                  marginTop: "1%",
                  marginRight: "1%",
                  backgroundColor: "rgb(0, 131, 169)",
                }}
              >
                <FontAwesomeIcon icon={faSave} /> Guardar
              </button>

              <button
                onClick={handleCancelEdit}
                className="btn btn-secondary"
                style={{
                  marginTop: "1%",
                  marginLeft: "1%",
                  backgroundColor: "rgba(233, 75, 89, 1)",
                }}
              >
                <FontAwesomeIcon icon={faTimes} /> Cancelar
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={handleEdit}
                className="btn btn-primary"
                style={{
                  marginTop: "1%",
                  marginRight: "1%",
                  backgroundColor: "rgb(0, 131, 169)",
                }}
              >
                <FontAwesomeIcon icon={faEdit} /> Editar
              </button>
              <button
                onClick={handleDelete}
                className="btn btn-danger"
                style={{
                  marginTop: "1%",
                  marginLeft: "1%",
                  backgroundColor: "rgba(233, 75, 89, 1)",
                }}
              >
                <FontAwesomeIcon icon={faTrash} /> Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { EntradaCompleta };
