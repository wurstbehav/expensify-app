import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(props.expesesTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                {
                    props.expensesCount < props.totalExpenses &&
                    <p className="form-error">Not showing all {props.totalExpenses} expenses because of filters.</p>
                }

                <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className='page-header__actions'>
                    <Link className='button' to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const totalExpenses = state.expenses.length
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expesesTotal: getExpensesTotal(visibleExpenses),
        totalExpenses
    }
}

export default connect(mapStateToProps)(ExpensesSummary)