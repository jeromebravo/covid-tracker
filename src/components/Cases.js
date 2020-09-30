import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCases } from '../actions/cases';
import { Link } from 'react-router-dom';
import spinner from '../img/spinner.gif';

const Cases = ({ match, history, getCases, cases }) => {
    useEffect(() => {
        getCases(match.params.name, history);
    }, [getCases, match.params.name, history]);

    return (
        !cases.loading ? (
            <section className='content'>
                <img className='content__img' src={cases.countryInfo.flag} alt='Flag' />
                <Link className='content__link' to='/'>&#8592; Back</Link>
                <div className='content__main'>
                    <div className='content__heading'>
                        <h1 className='heading--secondary'>{cases.country}</h1>
                    </div>
            
                    <div className='row'>
                        <div className='content__box'>
                            <div className='content__item'>
                                <h2 className='content__case'>{cases.cases.toLocaleString()}</h2>
                                <h3 className='content__description'>Total cases</h3>
                            </div>
                        </div>
                        
                        <div className='content__box'>
                            <div className='content__item'>
                                <h2 className='content__case'>{cases.active.toLocaleString()}</h2>
                                <h3 className='content__description'>Active cases</h3>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='content__box'>
                            <div className='content__item'>
                                <h2 className='content__case'>{cases.recovered.toLocaleString()}</h2>
                                <h3 className='content__description'>Total recoveries</h3>
                            </div>
                        </div>

                        <div className='content__box'>
                            <div className='content__item'>
                                <h2 className='content__case'>{cases.deaths.toLocaleString()}</h2>
                                <h3 className='content__description'>Total deaths</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) : <img src={spinner} className='spinner' alt='Loading...' />
    );
}

Cases.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    getCases: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    cases: state.cases
});

export default connect(mapStateToProps, { getCases })(Cases);