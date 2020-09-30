import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Homepage = ({ history }) => {
    const [country, setCountry] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        history.push(`/country/${country}`);
    }

    return (
        <section className='header'>
            <div className='header__main'>
                <h1 className='heading--primary'>Covid tracker</h1>
                
                <form className='form' onSubmit={onSubmit}>
                    <div className='form__group'>
                        <input className='form__input' type='text' name='country' placeholder='Country' value={country} onChange={e => setCountry(e.target.value)} required/>
                    </div>
                    <div className='form__group'>
                        <button className='form__button' type='submit'>Search</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

Homepage.propTypes = {
    history: PropTypes.object.isRequired,
}

export default Homepage;