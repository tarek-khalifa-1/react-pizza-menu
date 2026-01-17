function Pizza({ pizza }) {
  return (
    <div className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
    </div>
  );
}

export default Pizza;
