import axios from 'axios';
import { GET_CASES, CLEAR_CASES } from './types';

export const getCases = (c, history) => async dispatch => {
    try {
        const cntry = c;
        const res = await axios.get(`https://corona.lmao.ninja/v2/countries/${cntry}?yesterday=true&strict=true&query`);
    
        const { country, countryInfo, cases, deaths, recovered, active, updated } = res.data;

        dispatch({
            type: GET_CASES,
            payload: {
                country,
                countryInfo,
                cases,
                deaths,
                recovered,
                active,
                date: updated
            }
        });

    } catch(err) {
        dispatch({
            type: CLEAR_CASES
        });

        history.push('/');
    }
}