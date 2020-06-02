import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startsetExpenses,
    startremoveExpense,
    starteditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import database from '../../firebase/firebase'

const uid = 'thisismytestuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt } //{ 1: { amount: 195, createdAt: undefined, description: "Gum", note: ""}, 2:... }
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expense from firebsae', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startremoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({ //toBeFasly
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeNull();
        done()
    })


})

test('should edit expense from firebsae', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    const updates = {
        note: 'updated',
    }
    store.dispatch(starteditExpense(id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({ //toBeFasly
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val().note).toEqual(updates.note);
            done()
        })
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
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This is better',
        createdAt: 100
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })

    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})

test('should setup set expenses action with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startsetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})
