import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'
import ExpenseForm from '../../components/ExpenseForm'


let starteditExpense, startremoveExpense, history, wrapper

beforeEach(() => {
    starteditExpense = jest.fn()
    startremoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
        starteditExpense={starteditExpense}
        startremoveExpense={startremoveExpense}
        history={history}
        expense={expenses[2]}
    />
    )
})



test('should render editExpensepage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle starteditExpense', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(starteditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle startremoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startremoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id })
})
