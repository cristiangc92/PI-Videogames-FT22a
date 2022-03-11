import "../css/Paginado.css";

export default function Paginado({
  videogamesPerPage,
  allVideogames,
  paginado,
}) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  //Este componente va a renderizar los numeritos en si
  return (
    <nav>
      <ul className="ul">
        {pageNumbers?.map((number) => (
          <li className="paginado" key={number}>
            <button className="botonPaginado" onClick={() => paginado(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
