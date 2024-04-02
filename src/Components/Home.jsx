import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between px-4">
        <div>&lt; Store /&gt;</div>
        <div className="flex gap-4">
          <NavLink to="/home/products">Products</NavLink>
          <NavLink to="/home/Jewelry">Jewelry</NavLink>
          <NavLink to="/home/Electronics">Electronics</NavLink>
          <NavLink to="/home/Mens">Mens</NavLink>
          <NavLink to="/home/Womans">Womans</NavLink>
          <NavLink to="/home/Cart">Cart</NavLink>
        </div>
      </div>
      <div className="mb-4 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
