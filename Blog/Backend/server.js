const express = require("express");
const multer = require("multer");
const server = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bbdd-blog",
});

server.use(cors());
server.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

server.use("/public", express.static("public"));
server.use(upload.single("image"));

server.get("/posts", (req, res) => {
  const query =
    'SELECT *, CONCAT("http://localhost:3000/public/imagenes/", imagen) AS imagen_url FROM posts';
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al obtener los posts:", error);
      res.status(500).json({ error: "Error al obtener los posts" });
    } else {
      res.json(results);
    }
  });
});

server.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const image = req.file;

  if (!image) {
    res.status(400).json({ error: "No se ha proporcionado ninguna imagen" });
    return;
  }

  const originalFileName = image.originalname;

  const imageId = uuidv4();
  const imageUrl = `${imageId}_${originalFileName}`;
  const query =
    "INSERT INTO posts (titulo, contenido, imagen) VALUES (?, ?, ?)";
  connection.query(query, [title, content, imageUrl], (error, results) => {
    if (error) {
      console.error("Error al crear el post:", error);
      res.status(500).json({ error: "Error al crear el post" });
    } else {
      const imageDir = path.join(__dirname, "../Backend/public/imagenes");
      const imagePath = path.join(imageDir, imageUrl);

      fs.writeFileSync(imagePath, image.buffer, "binary");

      res.json({ message: "Post creado exitosamente" });
    }
  });
});

server.put("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const { titulo, contenido } = req.body;
  const image = req.file;

  const getPostQuery = "SELECT imagen FROM posts WHERE id = ?";
  connection.query(getPostQuery, [postId], (getPostError, getPostResult) => {
    if (getPostError) {
      console.error("Error al obtener el post:", getPostError);
      res.status(500).json({ error: "Error al obtener el post" });
      return;
    }

    if (getPostResult.length === 0) {
      res.status(404).json({ error: "No se encontró el post" });
      return;
    }

    const post = getPostResult[0];
    const oldImage = post.imagen;

    if (!image) {
      const updatePostQuery =
        "UPDATE posts SET titulo = ?, contenido = ? WHERE id = ?";
      connection.query(
        updatePostQuery,
        [titulo, contenido, postId],
        (updatePostError, updatePostResult) => {
          if (updatePostError) {
            console.error("Error al actualizar el post:", updatePostError);
            res.status(500).json({ error: "Error al actualizar el post" });
            return;
          }

          res.json({ message: "Post actualizado exitosamente" });
        }
      );
    } else {
      const originalFileName = image.originalname;

      const imageId = uuidv4();
      const imageUrl = `${imageId}_${originalFileName}`;

      const updatePostQuery =
        "UPDATE posts SET titulo = ?, contenido = ?, imagen = ? WHERE id = ?";
      connection.query(
        updatePostQuery,
        [titulo, contenido, imageUrl, postId],
        (updatePostError, updatePostResult) => {
          if (updatePostError) {
            console.error("Error al actualizar el post:", updatePostError);
            res.status(500).json({ error: "Error al actualizar el post" });
            return;
          }

          const imageDir = path.join(__dirname, "../Backend/public/imagenes");
          const imagePath = path.join(imageDir, imageUrl);

          fs.writeFileSync(imagePath, image.buffer, "binary");

          if (oldImage) {
            const oldImagePath = path.join(
              imageDir,
              oldImage.replace("/imagenes/", "")
            );
            fs.unlinkSync(oldImagePath);
          }

          res.json({ message: "Post actualizado exitosamente" });
        }
      );
    }
  });
});

server.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const query = "SELECT imagen FROM posts WHERE id = ?";

  connection.query(query, [postId], (error, results) => {
    if (error) {
      console.error("Error al obtener la imagen del post:", error);
      res.status(500).json({ error: "Error al eliminar el post" });
    } else {
      const image = results[0].imagen;
      const imageDir = path.join(__dirname, "../Backend/public/imagenes");

      if (image) {
        const imagePath = path.join(imageDir, image);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Error al eliminar la imagen:", err);
          } else {
            console.log("Imagen eliminada exitosamente");
          }
        });
      }

      const deleteQuery = "DELETE FROM posts WHERE id = ?";
      connection.query(deleteQuery, [postId], (error, result) => {
        if (error) {
          console.error("Error al eliminar el post:", error);
          res.status(500).json({ error: "Error al eliminar el post" });
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

server.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const query =
    'SELECT *, CONCAT("http://localhost:3000/public/imagenes/", imagen) AS imagen_url FROM posts WHERE id = ?';
  connection.query(query, postId, (error, results) => {
    if (error) {
      console.error("Error al obtener los posts:", error);
      res.status(500).json({ error: "Error al obtener los posts" });
    } else {
      res.json(results);
    }
  });
});

server.listen(3000, () => console.log("Servidor iniciado en el puerto 3000"));
