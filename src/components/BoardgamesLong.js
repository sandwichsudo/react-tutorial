import React from 'react';
import PropTypes from 'prop-types';

const BoardgamesLong = ({ name, image, minPlayers, maxPlayers, playingTime }) =>
     (
         <div>
           <h2>{name}</h2>
           <h3>{minPlayers} - {maxPlayers} players</h3>
           <h4>{playingTime} mins</h4>
           <img alt={name} src={image} height="400"/>
         </div>
    )

BoardgamesLong.propType = {
    name: PropTypes.string,
    image: PropTypes.string,
    minPlayers: PropTypes.string,
    maxPlayers: PropTypes.string,
}

export default BoardgamesLong;
