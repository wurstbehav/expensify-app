import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('shouldnot remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Test description',
        note: 'Test note',
        amount: 2000,
        createdAt: 2000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    // expect(state[3]).toEqual(expense)
    expect(state).toEqual([...expenses, expense])
})


test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { amount: 1 }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].amount).toEqual(1)
})

test('shouldnot edit an expense if id didnot match', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '100',
        updates: { amount: 1 }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].amount).toEqual(expenses[0].amount)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})

