
# Proyecto de Blog: "Cosas de Gatos" by Alejandro Fernández Gómez

 1  **Objetivos del proyecto de creación de blog. Funcionalidades y utilización**
 
 2  **Stack tecnológico utilizado y estructura del blog**
 
 3  **Diseño visual y responsividad del blog**

 4   **Complicaciones y desafíos técnicos**

 5  **Conclusiones y futuras mejoras del proyecto**



# 1. Objetivos del proyecto de creación de blog. Funcionalidades y utilización:
El objetivo principal era lograr un blog sencillo con el que se pudiese hacer posts que incluyesen título, contenido e imágenes en cada uno de los posts. El blog tendría que estar dividido en tres partes:
Una página Home donde puedes ver el feed con todos los posts que has hecho
-Una página de crear entrada a la que accedes desde un enlace en el Nav donde puedes crear un post
-Finalmente una página de Entrada Completa donde puedes editar o borrar el post. 
Además de eso el proyecto requería una estructura HTML concreta expresada en el enunciado. Esa estructura se sigue y se puede observar desde el HTML principal donde se renderiza la App bajando por las Páginas y Componentes.
En cuanto a las funcionalidades requeridas para el proyecto, eran estas:
-Crear posts en la correspondiente base de datos y guardar las imágenes correspondientes en una carpeta del Backend. Funciona.
-Borrar posts en la correspondiente base de datos y que se borren las imágenes correspondientes de esa carpeta del Backend desde la página de Entrada Completa, con aviso incluído. Funciona.
-Editar posts en la correspondiente base de datos.  Funciona.
El blog reedirige a  la página Home tras crear, editar o borrar posts por comodiad, limpieza y eficiencia.

# 2. Stack tecnológico utilizado y estructura del blog
Tecnologías utilizadas:
<br>
Frontend: HTML, CSS, React y JSX, Babel, Bootstrap, FortAwesome, moment, React Router DOM , react-dom, react-responsive, react-scripts, testing-library, axios
<br>
Backend: Node.js MySQL2, Express, Cors, Multer, fs, path, uuid, 

Estructura del blog:
A la hora de empezar a trabajar en este proyecto lo primero que lo que pensé en cuanto a la estructura fue en la división en tres páginas que se nos dijo desde las instrucciones: una página principal donde esté el feed de los posts del blog, una página con cada post concreto y luego una página para crear los posts.
Al ser esta la estructura principal y teniendo en cuenta que estamos usando react decidí que esas tres estructuras iban a ser componentes react llamados Páginas. Y a partir de ahí fui pensando en crear componentes que que estuvieran dentro de de esas páginas según las funcionalidades lo requerían.
En ese sentido la estructura es de dos carpetas grandes:
"blog-app" (carpeta frontend): Creada con create-react-app. Dentro de ella toda la estructura está dividida en Páginas y Componentes:
Páginas y componentes:
-"Home" es la página principal donde está el feed de los posts. Renderiza los Componentes:
"Header"
"Navigation"
"Feed": Renderiza el Componente "PostsCentrales"
"Footer"

-"PáginaEntradaCompleta" es la página con cada post concreto . Renderiza los Componentes:
"Header"
"Navigation"
"EntradaCompleta"
"Footer"

-"CrearEntrada" es la página para crear los posts. Renderiza los Componentes:
"Header"
"AddPost"
"Footer"

Finalmente el componente App importa las Páginas y ahí se establece el ruteo hacia las mismas
App se renderiza en index.js

"Backend" (carpeta backend):
Contiene el archivo "server.js" que lanza el servidor con todos los endpoints necesarios para que el proyecto funcione.
También contiene una carpeta llamada "public" donde está la carpeta "imagenes". En esa carpeta se guardan y borran las fotos de los posts creados.
Finalmente, en la base de datos "bbdd-blog" hay una tabla llamada " Post"s que incluye la id de cada post, el título del post, el contenido del mismo , la ruta de la imagen y la fecha  del momento de creación, generada automáticamente.

# 3. Diseño visual y responsividad del blog:
Desde el principio, a la hora de testear funcionalidades, estaba utilizando fotos de gatos porque personalmente me gustan mucho, tengo varios y les tengo mucho cariño. En resumen, me parecía agradable trabajar con datos e imágenes de gatos.
Por otra parte la ilustración hecha para la cabecera daba pie a unos colores que me gustaban bastante y se alejaban mucho de los estilos con los que había trabajado en la mayoría de mis proyectos previos, entonces también me gustó por variar el estilo visual con el que trabajo. Como en este caso la petición para esta prueba tenía unos requisitos muy concretos pero luego daba mucha libertad dentro de la estética entonces basé la mía en la de la cabecera.
Decidí utilizar la Biblioteca Bootstrap porque, por una parte la conocía previamente y por otra sentía  que me venía muy bien trabajar más con ella.
Obviamente, como en todo proyecto, la funcionalidad es lo primero, entonces decidí centrarme en eso y no me centré en la parte estética hasta más tarde. También decidí mantener el diseño bastante simple porque no quería sobrecomplicar las páginas ni la responsividad.
Aún así tengo que admitir que me resultó problemático cuadrar algún algún tema de la responsividad y de los estilos CSS y la biblioteca Bootstrap.
Sé que todavía tengo que mejorar en la utilización de Boostrap y de otras bibliotecas de estilos para tener un código más limpio, más pulido y que haya menos problemas en la responsividad. 

# 4. Complicaciones y desafíos técnicos.
En cuanto a las dificultades técnicas, quiero destacar un problema principal que me paró durante relativamente bastante tiempo. el cual me resultó bastante complicado de entender, y al final no era algo tan tan grande. Simplemente,  en el momento me supuso algo relativamente nuevo y complicado.
Me refiero al hecho de que  en el enunciado se pide que las imágenes se guarden en el backend en una carpeta y se envíen al frontend para renderizarlas desde allí y poder verlas en sus correspondientes post. 
No tuve problemas a la hora de los métodos de POST, PUT o DELETE con esas imágenes, pero no lograba que los GET funcionaran bien para poder renderizarlas 
Como al al principio me costaba bastante y quería avanzar en otros aspectos, mientras lo hacía estaba utilizando provisionalmente una carpeta en el Frontend para guardarlas, borrarlas y renderizarlas desde ahí. lo cual era sencillo.
Hacerlo desde el backend me resultaba complicado entre otras cosas porque nunca había utilizado FS y apenas había visto multer, herramienta que es bastante nueva para mí también,  aunque la utilizáramos en el curso.
En ese sentido lo que me costó llegar a entender fue la necesidad de configurar el  middleware express.static para poder servir archivos estáticos desde el servidor, como las imágenes que yo quería guardar y mostrar.
La verdad que todo el ese tema supuso un momento un poco complicado, sobre todo porque no sabía encontrar cuál era la raíz del problema. Podrían haber sido rutas o nomenclaturas pero al final lo solventé y pese a que no es un problema técnico muy grande sí que me fue lo más farragoso que me encontré.

# 5. Conclusiones y futuras mejoras del proyecto: 
De cara a hablar de las conclusiones y de futuras mejoras voy a centrar primero las conclusiones en las cosas positivas y luego las cosas a mejorar:
En cuanto a las cosas positivas sostengo que me centré bastante rápido en lo que tenía que hacer y supe organizarme bastante bien a nivel de tiempo y de cómo desempeñarme a la hora de establecer como quería estructurar el proyecto. Obviamente en la estructura nos venía dada,  pero dentro de eso me organicé rápido.
Creo que quedó funcional dentro de los parámetros que se pedían, con bastante responsividad y estéticamente coherente y bonito. Entonces, en ese sentido estoy contento con el resultado. 
Por otra parte en cuanto a cosas a mejorar voy a hacer una subdivisión aquí entre frontend y backend:
Frontend: 
Considero que tengo cosas de mejorar en tema aplicación de estilos con CSS y la utilización de bibliotecas como Bootstrap, en el sentido de que me queda margen de mejora para hacer que sea más limpio y más pulido el código.
También, y relacionado con eso, sé que puedo mejorar y seguir trabajando para que el blog sea responsivo de una manera más prefeccionada. Entiendo que llegúe a un punto aceptable y sólido pero hay mucho margen de mejora.
Asimismo, sé que a la hora de trabajar con React es interesante y a valorar el hecho de lograr la mayor funcionalidad posible de los componentes por separado, del poder reutilizarlos que no alcanzado aquí del todo. En este proyecto hay componentes que se pueden reutilizar pero sí que es verdad que está casi todo muy pensado para el blog en concreto.  Eso es un tema que sé que tengo que trabajar.  
Backend:
Considero que necesitaría investigar más en cuanto a utilizar multer y fs de cara a trabajar con el tratamiento de archivos. Sé que puedo mejorar en eso.
Además, soy consciente de que el código en el que establezco los endpoints y el servidor es muy extenso y eso una cosa mejorar en el sentido de que podría estar partido en varios segmentos. Es una cosa que tengo que aprender e incluir.


Y todo esto me lleva a que en general, tanto en el frontend como en el backend podría mejorar la limpieza y eficiencia de mi código a varios niveles. Estos son los aspectos principales en los que sé que tengo que mejorar y pulir mis habilidades como programador
De todos modos concluyo con que me centré en lograr las funcionalidades y estructura que se pedían y en conseguir una coherencia estética con la que estuviera cómodo, y en ese sentido estoy satisfecho.
