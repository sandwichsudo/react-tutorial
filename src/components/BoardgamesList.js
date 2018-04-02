import React from 'react';
import PropTypes from 'prop-types';
import BoardgameShort from './BoardgameShort';

const BoardgameList = ({ data }) =>
     (
         <ul>
         {data.map((game) =>
             <BoardgameShort
                 name={game.name}
                 alt={game.name}
                 thumbnail={game.thumbnail}
                 maxPlayers={game.maxPlayers}
                 minPlayers={game.minPlayers}
                 key={game.gameId}
                 gameId={game.gameId}
             />
         )}
         </ul>
    )

BoardgameList.propType = {
    data: PropTypes.Array,
}

export default BoardgameList;
