# Videogame - App

<p align="center">
  <img height="500" src="./videogame2.png" />
</p>
<p align="center">
  <img height="500" src="./videogame3.png" />
</p>
<p align="center">
  <img height="500" src="./videogame4.png" />
</p>

# Proyecto (Single Page Application) Videogame App #


#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize
- [ ] Postgres

__IMPORTANTE__: No se uso ninguna librería externa para aplicar estilos a la aplicación.  Solo  CSS  puro.




## Descripción 

Esta es una aplicación en la cual se puedan ver distintas videojuegos junto con información relevante de los mismas utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

  - Buscar videojuegos
  - Filtrarlos / Ordenarlos
  - Agregar nuevos videojuegos propios por medio de un formulario



### Endpoints/Flags:






  * GET https://api.rawg.io/api/games
    - Para obtener mayor información sobre los videojuegos.
  * GET https://api.rawg.io/api/games?search={game}
    - Para obtener mayor informacion de un videojuego especifico.
  * GET https://api.rawg.io/api/genres
    - Para obtener el listado de los generos de videojuegos.
  * GET https://api.rawg.io/api/games/{id}
    - Para obtener la información completa sobre un videojuegos particular.
   



#### Frontend

Aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: 
Landing page con:
- [ ] Imagen representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contiene
- [ ] Input de búsqueda para encontrar videojuegos por nombre.
- [ ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
  - Imagen
  - Nombre
  - Géneros
- [ ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros.
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating.
- [ ] Paginado para ir buscando y mostrando los siguientes videojuegos, 15 juegos por pagina, mostrando los primeros 15 en la primer pagina.

__IMPORTANTE__: Dentro de la Ruta Principal se muestran los videojuegos traidos desde la API como así también los de la base de datos. 

__Ruta de detalle de videojuego__: 
- [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
- [ ] Descripción
- [ ] Fecha de lanzamiento
- [ ] Rating
- [ ] Plataformas

__Ruta de creación de videojuegos__:
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Descripción
  - Fecha de lanzamiento
  - Rating
- [ ] Posibilidad de seleccionar/agregar varios géneros
- [ ] Posibilidad de seleccionar/agregar varias plataformas
- [ ] Botón/Opción para crear un nuevo videojuego

> El formulario de creación  esta validado con JavaScript y HTML. 
#### Base de datos

El modelo de la base de datos:

- [ ] Videojuego con las siguientes propiedades:
  - ID: *
  - Nombre *
  - Descripción *
  - Descripción
  - Descripción
  - Descripción *
- [ ] Genero con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que un videojuego puede pertenecer a varios géneros en simultaneo y, a su vez, un género puede contener múltiples videojuegos distintos.

#### Backend

Servidor en Node/Express con las siguientes rutas:


- [ ] __GET /videogames__:
  - Obtener un listado de los videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /videogames?name="..."__:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
- [ ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
- [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

- [ ] __POST /videogame__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos


## Descarga e instalación:

Forkear el repositorio o descargarlo para tener una copia del mismo 

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v
## Inicio del Proyecto

El proyecto cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. 

Adicionalmente será necesario que creen desde psql una base de datos llamada `videogame`

El contenido de `client` fue creado usando: Create React App.

Una vez abierto el proyecto es necesario iniciarlo: 

- Abrir en terminall integrado la carpeta `client`  y escribir `npm start`
- Abrir en terminall integrado la carpeta `api`  y escribir `npm start`

Todo listo!!!
