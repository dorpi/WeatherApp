
import React from 'react'
import Grid from "@material-ui/core/Grid";
import FavoriteItem from './FavoriteItem'
import PropsType from 'prop-types';



const FavoriteList = ({favorites})=> {
      return (
        <Grid container   spacing={4}>
          {favorites.map(( item,index) => (
           <Grid item xs={4} key={index}>
            <FavoriteItem favorite={item}  />
            </Grid>
          ))}
        </Grid>
      )
    }
  


    FavoriteList.PropsType = {
      favorites:PropsType.array.isRequired
    }
export default FavoriteList;