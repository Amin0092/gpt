import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {DropdownMenu} from "./DropdownMenu";
import { MenuIcon } from './../../../Icons/MenuIcon';

export function Menu() {
  return (
    <div className={styles.menu}>
        <Dropdown button={<button className={styles.menuButton}>
            <MenuIcon/>
        </button>}>
            <DropdownMenu postId='1234'/>
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

