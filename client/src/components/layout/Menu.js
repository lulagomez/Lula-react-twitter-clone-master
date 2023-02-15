import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Menu = () => {

    const authContext = useContext(AuthContext);

    const onLogout = () => {
        authContext.logout();
    }

    return (
        <Fragment>
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/" className="btn-link current btn-m">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className="btn-link btn-m">
                        <i className="fas fa-hashtag"></i> Explore
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className="btn-link btn-m">
                        <i className="fas fa-bell"></i> Notifications
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className="btn-link btn-m">
                        <i className="fas fa-envelope"></i> Messages
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className="btn-link btn-m">
                        <i className="fas fa-bookmark"></i> Bookmarks
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className="btn-link btn-m">
                        <i className="fas fa-list"></i> Lists
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className="btn-link btn-m">
                        <i className="fas fa-user"></i> Profile
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className="btn-link btn-m"
                    ><i className="fas fa-ellipsis-h circle"></i> More
                    </Link>
                </li>
                <li className="menu-item">
                    <Link onClick={onLogout} to="#" className="btn-link btn-m"
                    ><i className="fas fa-sign-out-alt"></i> Sign out
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default Menu;