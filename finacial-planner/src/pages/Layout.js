import { Outlet, Link } from "react-router-dom";
import Logo from "../img/Logo.png";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="RouteLayout">
          <li>
            <Link to="/financial-planner/">
              <img src={Logo} alt="Financial Planner" className="HeaderLogo"/>
            </Link>
          </li>
          <li>
            <Link to="/financial-planner/">Dashboard</Link>
          </li>
          <li>
            <Link to="/financial-planner/incomes">Incomes</Link>
          </li>
          <li>
            <Link to="/financial-planner/expenses">Expenses</Link>
          </li>
          <li>
            <Link to="/financial-planner/savings">Savings</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;