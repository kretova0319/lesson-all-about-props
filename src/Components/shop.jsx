function Shop(props) {
  const { tittle, type, price, img } = props;
  return (
    <div>
      <h2>{tittle}</h2>
      <p>{type}</p>
      <p>Цена за единицу: {price} руб.</p>
      <img src={img} alt="fruit" width="300px"></img>
    </div>
  );
}

export default Shop;
