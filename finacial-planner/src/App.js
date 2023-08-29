import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import NoPage from './pages/NoPage';
import Incomes from './pages/Incomes';
import Expenses from './pages/Expenses';
import Savings from './pages/Savings';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/financial-planner/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/financial-planner/incomes" element={<Incomes />} />
            <Route path="/financial-planner/expenses" element={<Expenses />} />
            <Route path="/financial-planner/savings" element={<Savings />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
