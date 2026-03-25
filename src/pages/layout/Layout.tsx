import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Jazz Store</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
