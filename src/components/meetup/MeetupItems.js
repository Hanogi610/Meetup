import classes from './MeetupItems.module.css';
import Card from '../UI/Card';
import {useContext} from 'react';
import FavoriteContexts from '../../store/favorite-contexts';

function Items(props){
  const favoriteCtx = useContext(FavoriteContexts);
  const itemIsFavorite = favoriteCtx.checkFavorite(props.id); 
    function toggleFavorite(){
        if(itemIsFavorite){
          favoriteCtx.removingFavorite(props.id);
        }
        else{
          favoriteCtx.addingFavorite({
            id: props.id,
            title: props.title,
            address: props.address,
            description: props.description,
            image: props.image,
          });
        }
    }

    return (
      <Card>
        <li className={classes.item}>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavorite}>{itemIsFavorite ? 'Not yet' : 'Vistied'}</button>
          </div>
        </li>
      </Card>
    );
}

export default Items;