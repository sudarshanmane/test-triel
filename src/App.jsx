import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Jwelery from "./Components/Jwelery";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/home/products"></Navigate>}
          ></Route>

          <Route path="/home" element={<Home></Home>}>
            <Route path="products" Component={Products}></Route>
            <Route path="Jewelry" Component={Jwelery}></Route>
            <Route path="Cart" Component={Cart}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
