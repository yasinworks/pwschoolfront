import React from 'react';
import './Header.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleUserMenu} from "../../store/operations";
import {isMenuActive} from "../../store/selectors";

function Header(props) {
    const dispatch = useDispatch();
    const isMenuToggled = useSelector(isMenuActive)
    const openMenu = () => {
        dispatch(toggleUserMenu())
    }

    return (
        <div className={'header'}>
            <div className={'header_user-wrap'} onClick={openMenu}></div>
            {isMenuToggled &&
                <div className="header_user-menu">
                    <button>Log In</button>
                    <button>Register</button>
                </div>
            }
        </div>
    );
}

export default Header;