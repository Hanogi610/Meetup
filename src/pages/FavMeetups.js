import FavoriteContexts from "../store/favorite-contexts";
import {useContext} from 'react';
import MeetupList from '../components/meetup/MeetupsList';

function FavMeetups(){
    const favoriteCtx = useContext(FavoriteContexts);
    let contents;
    if(favoriteCtx.totalFavorite === 0){
        contents = <p>Oops! You haven't finished any plan yet. Why don't ya check some ?</p>;
    }
    else{
        contents = <MeetupList content={favoriteCtx.favorites}/>;
    }

    return (
        <div>
            <h1>Visted Places</h1>
            {contents}
        </div>
    );
}

export default FavMeetups;