import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

const Scoops = () => {
  const [datas, setDatas] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3080/scoops")
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Ice Cream Varieties</h1>
      <p>
        Piece: <span className="text-success">2 $</span>
      </p>
      <h3 className="d-flex gap-1">
        Varieties Price:{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 2}
        </span>
        <span className="text-success">$</span>
      </h3>
      <div className="row d-flex gap-5 justify-content-between mt-4 p-3">
        {datas?.map((data, index) => (
          <Card key={index} data={data} basket={basket} setBasket={setBasket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
