import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Fab from '@material-ui/core/Fab';
import PropsType from 'prop-types'


  const FavoriteButton = ({onFavoriteAdd,isFavorite,favorite}) =>{
    const FavoriteButton = isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />;
    return (
        <Fab
              color={isFavorite ? 'default' : 'secondary'}
              disabled={isFavorite}
              aria-label='like'
              onClick={()=>onFavoriteAdd(favorite)}
            >
              {FavoriteButton}
            </Fab>
    )
}

FavoriteButton.PropsType= {
  onFavoriteAdd:PropsType.func.isRequired,
  isFavorite:PropsType.bool.isRequired,
  favorite:PropsType.object.isRequired
}

export default FavoriteButton