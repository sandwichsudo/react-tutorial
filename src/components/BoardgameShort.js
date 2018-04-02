import React from 'react';
import PropTypes from 'prop-types';

const BoardgameShort = ({ name, image, minPlayers, maxPlayers }) =>
     (
         <li>
           <h2>{name}</h2>
           <h3>{minPlayers} - {maxPlayers} players</h3>
           <img alt={name} src={image} height="200"/>
         </li>
    )

BoardgameShort.propType = {
    name: PropTypes.string,
    image: PropTypes.string,
    minPlayers: PropTypes.string,
    maxPlayers: PropTypes.string,
}

export default BoardgameShort;
