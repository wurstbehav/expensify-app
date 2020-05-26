import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([])
    expect(result).toEqual(0)
})

test('should add up a single expense', () => {
    const result = selectExpensesTotal([expenses[1]])
    expect(result).toEqual(109500)
})

test('should add up a multiple expenses', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toEqual(114195)
})
