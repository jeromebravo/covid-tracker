import { GET_CASES, CLEAR_CASES } from '../actions/types';

const initialState = {
    country: null,
    countryInfo: {},
    cases: 0,
    deaths: 0,
    recovered: 0,
    active: 0,
    date: null,
    loading: true
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_CASES:
            return {
                ...state,
                ...payload,
                loading: false
            }

        case CLEAR_CASES:
            return {
                country: null,
                countryInfo: {},
                cases: 0,
                deaths: 0,
                recovered: 0,
                active: 0,
                date: null,
                loading: true
            }

        default:
            return state;
    }
}