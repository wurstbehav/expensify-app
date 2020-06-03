import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { starteditExpense, startremoveExpense } from '../actions/expenses'
import SweetAlert from 'react-bootstrap-sweetalert';
export class EditExpensePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alert: null
        };
    }


    showAlert() {
        this.setState({
            alert: (
                <SweetAlert
                    danger
                    showCancel
                    title="Are you sure?"
                    style={{ backgroundColor: '#ffe277' }}
                    customButtons={
                        <React.Fragment>
                            <button className="button button--cancel" onClick={this.hideAlert}>Cancel</button>
                            <button className="button button--confirm" onClick={this.onClick}>Yes, Delete it</button>
                        </React.Fragment>
                    }
                >
                    You will not be able to recover the expense!
                </SweetAlert>
            )
        });
    }

    hideAlert = () => {
        this.setState({
            alert: null
        });
    }



    onSubmit = (expenseFromExpenseForm) => {
        this.props.starteditExpense(this.props.expense.id, expenseFromExpenseForm)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.startremoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }



    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense} //sending expense as a props to ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                    <div>
                        <button className="button button--secondary" onClick={
                            () => this.showAlert()
                        }>Remove Expense</button>
                        {this.state.alert}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        starteditExpense: (id, expenseFromExpenseForm) => {
            dispatch(starteditExpense(id, expenseFromExpenseForm))
        },
        startremoveExpense: (data) => {
            dispatch(startremoveExpense(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)

