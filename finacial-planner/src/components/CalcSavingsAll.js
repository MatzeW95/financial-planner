import jsonData from '../data/data.json';

const CalcSavingsAll = () => {
    
    let SavingsAll = 0;

    const {savings} = jsonData.data;

    savings.forEach((saving) => {
        if (saving.interval === 'monthly') {
          SavingsAll += parseFloat(saving.amount);
        } else if (saving.interval === 'yearly') {
          SavingsAll += parseFloat(saving.amount) / 12;
        }
    });

    return(SavingsAll.toFixed(2) + " €")
};

export default CalcSavingsAll;