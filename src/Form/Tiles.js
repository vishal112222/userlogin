import React from 'react';

const Tiles = ({ name, onClick, isSelected }) => {
    const onClickHandler = () => {
        onClick(name);
    }
    return (
        <div onClick={onClickHandler} className={`tile ${isSelected ? 'tile-selected' : ''}`}>
            <span name={name} className='title' >{name}</span>
        </div>
    );
}


export default Tiles;

