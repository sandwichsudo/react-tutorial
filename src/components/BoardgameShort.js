import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BoardgameLong = ({ name, thumbnail, minPlayers, maxPlayers, gameId }) =>
     (
         <li>
            <Link to={`/details/${gameId}`} className="BoardgamesShort">
               <h2 className="BoardgamesShort__title">{name}</h2>
               <img className="BoardgamesShort__img" alt={name} src={thumbnail} />
               <h3 className="BoardgamesShort__desc">{minPlayers} - {maxPlayers} players</h3>
           </Link>
         </li>
    )

BoardgameLong.propType = {
    name: PropTypes.string,
    image: PropTypes.string,
    minPlayers: PropTypes.string,
    maxPlayers: PropTypes.string,
    gameId: PropTypes.string,
}

export default BoardgameLong;
