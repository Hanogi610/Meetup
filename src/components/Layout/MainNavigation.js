import { Link } from 'react-router-dom';
import mainNav from './MainNavigation.module.css';
import {useContext} from 'react';
import FavoriteContexts from '../../store/favorite-contexts';

function MainNavigation(){
    const favoriteCtx = useContext(FavoriteContexts);

    return (
      <header className={mainNav.header}>
        <div>
          <h2>Visit PLan</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link className={mainNav.bridge} to="/">
                All Places
              </Link>
            </li>
            <li>
              <Link className={mainNav.bridge} to="/new-meetup">
                New Places
              </Link>
            </li>
            <li>
              <Link className={mainNav.bridge} to="/fav-meetups">
                Visited Places
                <span className={mainNav.badge}>{favoriteCtx.totalFavorite}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigation;