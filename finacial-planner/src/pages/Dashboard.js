import ChartFinancialOverview from "../components/ChartFinancialOverview";
import TableFinancialOverview from "../components/TableFinancialOverview";

const Dashboard = () => {
    return(
      <>
        <div className="ContentBox">
          <h1>Dashboard</h1>
          <ChartFinancialOverview/>
          <TableFinancialOverview/>
        </div>
        
      </>
    );
  };
  
  export default Dashboard;