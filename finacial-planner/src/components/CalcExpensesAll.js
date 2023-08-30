import jsonData from '../data/data.json';

const CalcExpensesAll = () => {

    let ExpensesAll = 0;

    const {expenses} = jsonData.data;

    expenses.forEach((expense) => {
        if (expense.interval === 'monthly') {
          ExpensesAll += parseFloat(expense.amount);
        } else if (expense.interval === 'yearly') {
          ExpensesAll += parseFloat(expense.amount) / 12;
        }
    });

    return(ExpensesAll.toFixed(2) + " €")
};

export default CalcExpensesAll;