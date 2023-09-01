import jsonData from '../data/data.json';

const TableFinancialOverview = () => {

    const dates = jsonData.data;

    const unsorted = dates.expenses.concat(dates.incomes, dates.savings);

    /*
    let split = unsorted[0].date.split('/');
    let splitMonth = split[0];
    let splitDate = split[1];
    */

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let sorted, split, splitDate, splitMonth;

    unsorted.forEach((item) => {
        if(item.interval === "monthly") {

        }
        else if(item.interval === "yearly") {

            split = item.date.split('/');
            splitMonth = split[0];
            splitDate = split[1];

            let dateCheck = new Date(currentYear, splitMonth-1, splitDate); //js month start at 0
            let dateNow = new Date(currentYear, currentMonth, currentDay);

            let difference = (dateCheck - dateNow) / 1000 / 60 / 60 / 24;

            //check for current year and and + 30 days or < 0
            if(difference > 30 || difference < 0) {
                let dateFuture = new Date(currentYear + 1, splitMonth-1, splitDate);

                difference = (dateFuture - dateNow) / 1000 / 60 / 60 / 24;
                
                //here check for next year and + 30 days or < 0
                if(difference > 30 || difference < 0) {
                    //here if future date is outside 30 days
                    console.log("Future outside 30 days")
                }
                else {
                    //here if future date is inside 30 days
                    console.log("Future inside 30 days")
                
                }
            }
            else {
                //here if its inside present 30 days
                console.log("Present inside 30 days")
            }
                
        }
    });


    console.log(unsorted);

    return(
        <>
           
        </>
    )
};

export default TableFinancialOverview;