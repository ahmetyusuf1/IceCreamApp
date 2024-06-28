const Card = ({ data, basket, setBasket }) => {
  const found = basket.filter((product) => product.name == data.name);
  const amount = found.length;

  const handleReset = () => {
    setBasket(basket.filter((product) => product.name !== data.name));
  };
  return (
    <div
      style={{ width: 200 }}
      className="d-flex flex-column align-items-center gap-1 border rounded p-2"
    >
      <img src={data.imagePath} width={100} alt="ice-cream" />
      <span className="fs-5">{data.name}</span>
      <div className="d-flex align-items-center gap-2 my-4">
        <button onClick={handleReset} className="btn btn-sm btn-outline-danger">
          Reset
        </button>
        <span className="fs-4">{amount}</span>
        <button
          onClick={() => setBasket([...basket, data])}
          className="btn btn-sm btn-outline-success"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
