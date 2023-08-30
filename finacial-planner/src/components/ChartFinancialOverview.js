import 'chart.js/auto';

import CalcExpensesAll from './CalcExpensesAll';
import CalcIncomesAll from './CalcIncomesAll';
import CalcSavingsAll from './CalcSavingsAll';

import ChartExpensesAll from "./ChartExpensesAll";
import ChartIncomesAll from "./ChartIncomesAll";
import ChartSavingsAll from "./ChartSavingsAll";

const ChartFinancialOverview = () => {
  return(
    <>
      <div className='OverviewContainer'>
        <div className='OverviewContainerChild'>
          <div>
            <p className='OverviewContainerSubHeading'>
              Einnahmen
            </p>
            <CalcIncomesAll/>
          </div>
          <ChartIncomesAll showLegend="false"/>
        </div>
        <div className='OverviewContainerChild'>
          <div>
            <p className='OverviewContainerSubHeading'>
              Ausgaben
            </p>
            <CalcExpensesAll/>
          </div>
          <ChartExpensesAll showLegend="false"/>
        </div>
        <div className='OverviewContainerChild'>
          <div>
            <p className='OverviewContainerSubHeading'>
              Ersparnisse
            </p>
            <CalcSavingsAll/>
          </div>
          <ChartSavingsAll showLegend="false"/>
        </div>
      </div>
    </>
  );
};
  
export default ChartFinancialOverview;