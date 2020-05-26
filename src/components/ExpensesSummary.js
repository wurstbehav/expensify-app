import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(props.expesesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {props.expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expesesTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)