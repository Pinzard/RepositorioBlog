-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 19:33:59
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bbdd-blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` longtext NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `titulo`, `contenido`, `imagen`, `fecha`) VALUES
(522, 'El enfado de los gatos', 'Los gatos tienen un comportamiento más ligado a su instinto salvaje en comparación con los perros, lo que puede hacer que su adiestramiento sea más desafiante. Además, el destete y la separación de su madre y hermanos antes de los 3 meses de vida pueden predisponerlos a experimentar estrés y ansiedad por separación.\r\n\r\nPor lo tanto, las principales causas del enfado de un gato están relacionadas con cambios en su rutina que lo hacen sentir amenazado en su posición dominante. Puede sentir que está perdiendo protagonismo en el hogar y, por lo tanto, moviliza sus recursos para restaurar el equilibrio. Si el origen del enfado está relacionado con la presencia de otro animal o persona que acapara toda tu atención, es importante permitir que el gato se familiarice gradualmente con ellos.\r\n\r\nPuedes utilizar difusores de feromonas o proporcionarle objetos con su olor para ayudar en el proceso de adaptación. Nunca debes obligar al gato a acercarse si no quiere, y el proceso debe ser abordado de manera gradual. Es recomendable consultar información adicional sobre cómo facilitar la adaptación de un gato a otro.\r\n\r\nOtra razón por la que un gato puede enojarse fácilmente es el exceso de caricias. Cada gato tiene un nivel de tolerancia diferente a las caricias, por lo que es importante respetar sus límites. Si observas que no recibe las caricias de manera positiva, evita acariciarlo de forma sorpresiva y hazlo solo cuando él lo solicite. Puedes aprender más sobre cómo acariciar a un gato correctamente. El enojo de un gato también puede estar relacionado con la suciedad de su comedero y bebedero, así como con el incumplimiento de horarios de alimentación. Los gatos valoran mucho seguir una rutina que les brinde seguridad, por lo que es importante procurar alimentarlos siempre a la misma hora.\r\n\r\nExisten otras posibles causas que explican por qué un gato está enojado o muestra agresividad, como el hecho de padecer una enfermedad que afecte su estado de ánimo, intentar proteger su territorio o sentirse aburrido y sin estímulos en su entorno.', '0b351706-3f4b-4c3a-998e-38c7172de695_75552.ngsversion.1422285553360.jpg', '2023-07-02 22:37:17'),
(534, 'Adiestrando a tu gato', 'Es posible adiestrar a un gato, ya que son seres inteligentes e intuitivos que pueden captar nuestras señales. Solo necesitamos aprender a comunicarnos de manera efectiva con ellos.\r\n\r\nEs importante entender la naturaleza de los gatos y reconocer que su comportamiento está más ligado a su instinto salvaje en comparación con los perros. Esto puede hacer que su adiestramiento sea más complejo y desafiante, pero no imposible.\r\n\r\nPara lograrlo, es fundamental tener paciencia y observar el comportamiento de nuestro gato. Cada gato es único y tiene su propia forma de ser. Debemos comprender por qué actúa de cierta manera en diferentes situaciones. Al entender su personalidad y necesidades específicas, podremos establecer una conexión sólida con ellos.\r\n\r\nEs esencial tener en cuenta que los gatos son diferentes a los perros en su forma de entender el mundo. No son simplemente perros en versión más pequeña y liviana. Debemos comprenderlos en sus propios términos y adaptar nuestra comunicación a su naturaleza felina.\r\n\r\nAntes de iniciar el adiestramiento, es importante tener claridad sobre los objetivos que queremos alcanzar. Podemos buscar evitar ciertos comportamientos no deseados, establecer un lenguaje común con nuestro gato, enseñarle comandos básicos o lograr una convivencia armoniosa con otros seres. Cada objetivo requerirá una estrategia específica.\r\n\r\nLa estabilidad mental de nuestro gato es fundamental para su adiestramiento. Es necesario que haya tenido suficiente tiempo de socialización con su madre, hermanos y el entorno. En el caso de gatos callejeros o rescatados, puede ser más complicado, pero no imposible educarlos de manera efectiva.\r\n\r\nLa educación de un gato debe comenzar desde el primer día en que llega a nuestro hogar. Establecer rutinas y pautas claras desde el principio es fundamental. Debemos enseñarle gradualmente cómo vivir en nuestra casa y qué comportamientos son aceptables. La consistencia y la paciencia son clave para obtener resultados positivos a largo plazo.\r\n\r\nSi un gato presta atención y responde a nuestras indicaciones, es porque está interesado en el cambio que le estamos proponiendo. A diferencia de los perros, los gatos son más selectivos en su obediencia y solo responderán si perciben que obtienen algo valioso de lo que les ofrecemos. Debemos recompensar su buen comportamiento y brindarles incentivos adecuados para motivarlos durante el adiestramiento.\r\n\r\nEn resumen, aunque el adiestramiento de los gatos puede ser desafiante, es posible lograr resultados positivos. Con paciencia, comprensión de su naturaleza felina y una comunicación adecuada, podemos establecer una relación armoniosa y educar a nuestro gato de manera efectiva.', '43eeb602-6f3b-4b1f-8b61-c0dbd7c6422b_educando.jpg', '2023-07-03 11:46:18'),
(535, 'Las crías de gato', 'Los gatitos bebé tienen algunas características y comportamientos únicos. Al principio de su vida, dependen completamente de la leche materna para su alimentación. Durante las primeras semanas, duermen la mayor parte del tiempo, llegando a dormir más de 20 horas al día.\r\n\r\nEs interesante saber que los gatitos nacen sordos y ciegos, lo cual los hace especialmente vulnerables y dependientes de su madre. Sin embargo, a medida que crecen, sus sentidos se desarrollan y adquieren habilidades motoras.\r\n\r\nA los cuatro meses de edad, los gatitos experimentan el cambio de dientes, ya que les salen los dientes de adulto. Este proceso puede ser incómodo para ellos y es importante proporcionarles juguetes adecuados para que puedan morder y aliviar la molestia.\r\n\r\nAl nacer, todos los felinos tienen ojos azules. Sin embargo, a medida que crecen, el color de sus ojos puede cambiar y adquirir su color final, que varía según la genética de cada gato.\r\n\r\nUn dato curioso es que los gatitos aprenden a utilizar el arenero al seguir a su madre a todos lados. Observando su comportamiento, aprenden a usar el arenero de manera instintiva, lo que facilita el proceso de entrenamiento de higiene.\r\n\r\nLos gatitos bebés son adorables y llenos de curiosidad. A medida que los cuidamos y los vemos crecer, podemos maravillarnos con su desarrollo y disfrutar de su compañía juguetona y afectuosa.', '0138668b-0363-4e3c-8115-11e3b8cf620c_Blanco.jpg', '2023-07-03 12:00:13'),
(541, 'La comunicación de los gatos', 'Los gatos emiten una variedad de sonidos para comunicarse, lo cual puede resultar encantador cuando escuchamos a nuestro gato ronronear mientras lo acariciamos o maullar cuando desea jugar. Actualmente, sabemos que los gatos pueden utilizar hasta 100 vocalizaciones diferentes para comunicarse tanto con nosotros como con otros gatos, aunque su repertorio vocal es más amplio cuando se trata de interactuar con los seres humanos.\r\n\r\nEs interesante notar que los gatos no se comunican de la misma manera con nosotros que entre ellos. Mientras que entre gatos utilizan un número más limitado de sonidos, cuando se comunican con los humanos han aprendido a desarrollar una amplia variedad de vocalizaciones. Por ejemplo, tu gato puede haber descubierto que si maúlla de cierta manera, puede obtener comida, jugar contigo o simplemente llamar tu atención. ¿Te habías percatado de este detalle? Si convives con varios gatos, vale la pena observar cómo se comunican entre sí y cómo interactúan contigo.', '3dc7526c-3517-425e-8b14-eb38333cbd8c_eca-gatos-colores-2_20937334_20221026082307-photoaidcom-2x-ai-zoom.jpg', '2023-07-03 12:31:49'),
(544, 'La concentración de un gato', 'Los gatos muestran una concentración notable en diversas situaciones. Su curiosidad natural y su habilidad para prestar atención les permiten enfocarse en diferentes actividades. Algunos aspectos relevantes de la concentración de los gatos incluyen:\r\n\r\nEnfoque en la caza: Los gatos son depredadores excelentes y muestran una gran capacidad para concentrarse en la caza. Pueden pasar largos períodos de tiempo acechando y esperando pacientemente a su presa, atentos a cualquier movimiento o sonido.\r\n\r\nJuego interactivo: Durante el juego interactivo, los gatos se concentran intensamente. Persiguen juguetes, saltan, trepan y capturan objetos en movimiento, lo que les permite ejercitar sus habilidades y liberar energía.\r\n\r\nObservación y exploración: Los gatos son observadores por naturaleza y les gusta explorar su entorno. Dedican tiempo a examinar cada detalle y a investigar objetos, sonidos u olores intrigantes que encuentran.\r\n\r\nRelajación profunda: Después de momentos de actividad intensa o satisfacer su necesidad de caza, los gatos necesitan descansar. Durante estos momentos, se relajan y pueden entrar en un estado de sueño profundo.\r\n\r\nLa concentración de los gatos puede variar según su personalidad, entorno y nivel de estimulación. Como cuidadores, podemos fomentar su concentración proporcionando juguetes interactivos, enriquecimiento ambiental y tiempo de juego estructurado para mantener su mente activa y estimulada.', '9f7cc8eb-b762-48a3-bd42-1c0f494ba1f8_Marron.jpg', '2023-07-03 13:45:03');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=552;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
