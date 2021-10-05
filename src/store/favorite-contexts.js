import{createContext, useState} from 'react';

const FavoriteContexts = createContext({
    favorites: [],
    totalFavorite: 0,
    addingFavorite: (favoriteMeetup) => {},
    removingFavorite: (meetupId) => {},
    Favorite: (meetupId) => {}
});

export function FavoriteContextsProvider(props){
    const [userFavorite, setUserFavorite] = useState([]);
    const context = {
        favorites: userFavorite,
        totalFavorite: userFavorite.length,
        addingFavorite: addFavorite,
        removingFavorite: removeFavorite,
        checkFavorite: alreadyFavorite
    };

    function addFavorite(favoriteMeetup){
        setUserFavorite((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup);
        });
    }
    
    function removeFavorite(meetupId){
        setUserFavorite((prevUserFavorite)=>{
            return prevUserFavorite.filter(meetup => meetup.id !== meetupId);
        });
    }

    function alreadyFavorite(meetupId){
        return userFavorite.some(meetup => meetup.id === meetupId);
    }

    return (
      <FavoriteContexts.Provider value={context}>
        {props.children}
      </FavoriteContexts.Provider>
    );
}

export default FavoriteContexts;