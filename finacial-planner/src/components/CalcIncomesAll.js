import jsonData from '../data/data.json';

const CalcIncomesAll = () => {

    let IncomesAll = 0;

    const {incomes} = jsonData.data;

    incomes.forEach((income) => {
        if (income.interval === 'monthly') {
          IncomesAll += parseFloat(income.amount);
        } else if (income.interval === 'yearly') {
          IncomesAll += parseFloat(income.amount) / 12;
        }
    });

    return(IncomesAll.toFixed(2) + " €")
};

export default CalcIncomesAll;