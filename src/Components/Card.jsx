const Card = ( name ) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
                                                {/* En cada card deberan mostrar en name - username y el id */}
      <h2>{name.name}</h2>                      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <h2>{name.username}</h2>                  {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <h2>{name.id}</h2>
    
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
