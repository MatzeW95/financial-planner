import jsonData from '../data/data.json';

function filter30Days(unsortedArray) {

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let split, splitDate, splitMonth;
    let filteredArray = [];

    unsortedArray.forEach((item) => {
        if(item.interval === "monthly") {
            filteredArray.push(item);
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
                let dateFuture = new Date(currentYear + 1, splitMonth-1, splitDate); //Add one year

                difference = (dateFuture - dateNow) / 1000 / 60 / 60 / 24;
                
                //here check for next year and + 30 days or < 0
                if(difference <= 30 && difference >= 0) {
                    //here if future date is outside 30 days
                    filteredArray.push(item);    
                }
            }
            else {
                //here if its inside present 30 days
                filteredArray.push(item);
            } 
        }
    });

    return filteredArray;
}

function sort30Days(filteredArray) {

    let sortedArray = [];

    function sortByDate(a, b) {
        const currentDate = new Date();
        const currentDay = currentDate.getDate(); //current day
        
        //second part value "date"
        const dateA = a.date.split("/")[1];
        const dateB = b.date.split("/")[1];
        
        //if smaller current day move to end of array
        if (dateA < currentDay) {
            return 1;
        } 

        if (dateB < currentDay) {
            return -1;
        }
        
        //sort asc
        return dateA - dateB;
    }

    sortedArray = filteredArray.sort(sortByDate);

    return sortedArray;
}

const TableFinancialOverview = () => {

    const dates = jsonData.data;
    const unsorted = dates.expenses.concat(dates.incomes, dates.savings); //connect all 3 arrays

    let filtered = filter30Days(unsorted);

    let sorted = sort30Days(filtered);

    console.log(sorted)

    return(
        <>
           
        </>
    )
};

export default TableFinancialOverview;