import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})


test('should generate set text filter action object with text value', () => {
    const action = setTextFilter('testing')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'testing'
    })

})

test('should generate set text filter action object as default text value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })

})

test('should generate sortBy date filter action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'

    })

})

test('should generate sortBy amount filter action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'

    })

})

