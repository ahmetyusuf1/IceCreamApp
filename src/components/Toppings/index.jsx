import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [toppings, setToppings] = useState([]);
  const [basket, setBasket] = useState([]);

  console.log(basket);

  useEffect(() => {
    axios
      .get("http://localhost:3080/toppings")
      .then((res) => setToppings(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };

  return (
    <div>
      <h1>Toppings Varieties</h1>
      <p>
        Piece <span className="text-success">1 $</span>
      </p>
      <h3>
        Toppings Price:{" "}
        <span className="text-success" data-testid="totalPrice">
          {basket.length * 1}
        </span>{" "}
        <span className="text-success">$</span>
      </h3>
      <div className="row gap-3 p-3">
        {toppings.map((topping, index) => (
          <div key={index} className="topping-card" style={{ width: 150 }}>
            <label
              htmlFor={topping.name}
              className="d-flex flex-column align-items-center gap-4"
            >
              <img height={100} src={topping.imagePath} alt="topping-img" />
              <p className="text-nowrap text-center">{topping.name}</p>
            </label>
            <input
              onChange={(e) => handleChange(e.target.checked, topping)}
              type="checkbox"
              id={topping.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
