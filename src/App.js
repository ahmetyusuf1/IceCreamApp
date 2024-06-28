import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";

function App() {
  return (
    <div className="container my-5">
      <Scoops />
      <Toppings />
      <Form />
    </div>
  );
}

export default App;
