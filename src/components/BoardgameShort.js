import React from 'react';
import PropTypes from 'prop-types';

const BoardgameShort = ({ name, image, minPlayers, maxPlayers }) =>
     (
         <div>
           <h2>{name}</h2>
           <h3>{minPlayers} - {maxPlayers} players</h3>
           <img alt={name} src={image} width="200"/>
         </div>
    )

BoardgameShort.propType = {
    name: PropTypes.string,
    image: PropTypes.string,
    minPlayers: PropTypes.string,
    maxPlayers: PropTypes.string,
}

export default BoardgameShort;
