import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFox } from './actions'

function FoxDisplay(props) {
    const { image } = props;

    useEffect(() => {
        props.fetchFox()
    }, [])
    
    const handleClick = e => {
        e.preventDefault();
        props.fetchFox();
    }

    return (
        <div>
            <h1>Check out this fox!</h1>
            <div className='card'>
                <div className='img-container'>
                    <img src={image} alt='fox' />
                </div>
                <button className='fox-button' onClick={handleClick}>Click for a random fox!</button>
            </div>
        </div>
    )
}

const mapPropsToState = (state) => {
    return {
        image: state.image
    }
}

export default connect(mapPropsToState, {fetchFox})(FoxDisplay);