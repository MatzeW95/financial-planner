import jsonData from '../data/data.json';

function filter30Days(unsortedArray) {

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // setting time to midnight to only compare days

    const filteredArray = [];

    unsortedArray.forEach(item => {

        if (item.status === true) {

            if (item.interval === "monthly") {
                filteredArray.push(item);
            }
            else if (item.interval === "yearly") {

                const itemDate = new Date(currentDate.getFullYear(), item.date.month - 1, item.date.day);
                const timeDifference = itemDate - currentDate;

                if (timeDifference >= 0 && timeDifference <= 30 * 24 * 60 * 60 * 1000) {
                    filteredArray.push(item);
                }
                else {
                    const nextYearDate = new Date(currentDate.getFullYear() + 1, item.date.month - 1, item.date.day);
                    const nextYearTimeDifference = nextYearDate - currentDate;

                    if (nextYearTimeDifference >= 0 && nextYearTimeDifference <= 30 * 24 * 60 * 60 * 1000) {
                        filteredArray.push(item);
                    }
                }
            }
        }
    });

    return filteredArray;
}

function sort30Days(filteredArray) {

    return filteredArray.sort((a, b) => {

        if (a.date.month !== b.date.month) {
            return a.date.month - b.date.month;
        } 
        else {
            return a.date.day - b.date.day;
        }
    });
}

function addMonth(sortedArray) {

    const now = new Date();
    const currentDay = now.getDate();

    sortedArray.forEach(item => {

        if(item.interval === "monthly"){

            if(item.date.day < currentDay) {
                item.date.month = now.getMonth() + 2;
            }
            else if(item.date.day >= currentDay) {
                item.date.month = now.getMonth() + 1;
            }
        }
    });
  return sortedArray;
}

const TableFinancialOverview = () => {

    const dates = jsonData.data;
    const unsorted = dates.expenses.concat(dates.incomes, dates.savings); //connect all 3 arrays

    let filtered = filter30Days(unsorted);

    let withMonth = addMonth(filtered)

    let sorted = sort30Days(withMonth);

    console.log(sorted)

    return (
        <table>
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Name</th>
                    <th>Betrag</th>
                    <th>Interval</th>
                    <th>Kategorie</th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((item) => (
                    <tr>
                        <td>{item.date.day}.{item.date.month}</td>
                        <td>{item.name}</td>
                        <td>{item.amount.toFixed(2)} €</td>
                        <td>{item.interval}</td>
                        <td>{item.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default TableFinancialOverview;