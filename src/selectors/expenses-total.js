
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const getExpensesTotal = (expenses) => {

    if (expenses.length === 0) {
        return 0
    }
    const expensesAmount = expenses.map((expense) => { return expense.amount })
    return expensesAmount.reduce(reducer);

}

export default getExpensesTotal