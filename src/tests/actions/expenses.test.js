import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New Note Value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New Note Value' }
    })
})

test('should setup add expense action object with provided values', () => {
    const action = addExpense({
        description: 'Rent',
        note: 'Last month rent',
        amount: 100,
        createdAt: 2019
    })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Rent',
            note: 'Last month rent',
            amount: 100,
            createdAt: 2019
        }
    })
})

test('should setup add expense action object with default value', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})
