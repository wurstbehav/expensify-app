import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import { DateRangePicker } from 'react-dates';

let setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}

    />)
})

test('should reder Expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should reder Expense list with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
    const calendarFocused = 'endDate'
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})
