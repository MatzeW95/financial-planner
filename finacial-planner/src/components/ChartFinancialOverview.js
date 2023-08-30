import 'chart.js/auto';

import ChartExpensesAll from "./ChartExpensesAll";
import ChartIncomesAll from "./ChartIncomesAll";
import ChartSavingsAll from "./ChartSavingsAll";

const ChartFinancialOverview = () => {
  return(
    <>
      <div className='OverviewContainer'>
        <ChartExpensesAll showLegend="false"/>
        <ChartIncomesAll showLegend="false"/>
        <ChartSavingsAll showLegend="false"/>
      </div>
    </>
  );
};
  
export default ChartFinancialOverview;