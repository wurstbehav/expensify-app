import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

const expense = expenses[1]


test('should render Expense List item with given expense', () => {
    const wrapper = shallow(<ExpenseListItem id={expense.id} description={expense.description} amount={expense.amount} createdAt={expense.createdAt} />)
    expect(wrapper).toMatchSnapshot()
})