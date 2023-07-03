import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    const newTitle = event.target.value.substring(0, 40);
    setTitle(newTitle);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    setImage(selectedImage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ":", pair[1]);
    }

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      console.log("Post creado:", data);
      setTitle("");
      setContent("");
      setImage(null);

      navigate("/");

      alert("¡Entrada creada en el blog!");
    } catch (error) {
      console.error("Error al crear el post:", error);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">Añadir entrada</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Título"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Contenido"
                value={content}
                onChange={handleContentChange}
              ></textarea>
            </div>
            <div className="form-group añadir-entrada">
              <input
                type="file"
                className="form-control-file"
                name="image"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
              <button type="submit" className="btn btn-primary">
                Guardar entrada
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </form>
    </div>
  );
};
