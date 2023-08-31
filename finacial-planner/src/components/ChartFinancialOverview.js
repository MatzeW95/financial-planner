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
          <div className='OverviewContainerChildLeft'>
            <div>
              <a className='AddNew'>+</a>
            </div>
            <div>
              <p className='OverviewContainerSubHeading'>
                Einnahmen
              </p>
              <CalcIncomesAll/>
            </div>
          </div>
          <ChartIncomesAll showLegend="false"/>
        </div>
        <div className='OverviewContainerChild'>
          <div className='OverviewContainerChildLeft'>
            <div>
              <a className='AddNew'>+</a>
            </div>
            <div>
              <p className='OverviewContainerSubHeading'>
                Ausgaben
              </p>
              <CalcExpensesAll/>
            </div>
          </div>
          <ChartExpensesAll showLegend="false"/>
        </div>
        <div className='OverviewContainerChild'>
          <div className='OverviewContainerChildLeft'>
            <div>
              <a className='AddNew'>+</a>
            </div>
            <div>
              <p className='OverviewContainerSubHeading'>
                Ersparnisse
              </p>
              <CalcSavingsAll/>
            </div>
          </div>
          <ChartSavingsAll showLegend="false"/>
        </div>
      </div>
    </>
  );
};
  
export default ChartFinancialOverview;