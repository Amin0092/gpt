import React, {useEffect, useRef} from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {DropdownMenu} from "./DropdownMenu";
import {MenuIcon} from '../../../Icons';

interface fff {
    onClose?: () => void
}

export function Menu({onClose} : fff) {

    return (
        <div className={styles.menu} >
            <Dropdown button={<button className={styles.menuButton}>
                <MenuIcon/>
            </button>}>
                <DropdownMenu/>
            </Dropdown>

        </div>
    );
}

// export function Menu() {
//     return(
//         <Dropdown button={<MenuComponent/>}>
//             <DropdownMenu/>
//         </Dropdown>
//     )
// }

