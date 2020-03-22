export const getFavoritesFromLocal = ()=>{
    let favorites = localStorage.getItem("favorites");
    if (favorites === null) {
      favorites = [];
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    else
      favorites=JSON.parse(favorites)

    
    return favorites;
}

export const addFavoriteLocal = (favorite)=>{

    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites.filter(item => item.Key === favorite.Key).length <= 0) {
      favorites.push(favorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    
}


export const deleteFavoriteLocal = (favorite)=>{
    const favorites = localStorage.getItem("favorites");
    const temp = JSON.parse(favorites).filter(item => item.Key !== favorite.Key);
    localStorage.setItem("favorites", JSON.stringify(temp));
}