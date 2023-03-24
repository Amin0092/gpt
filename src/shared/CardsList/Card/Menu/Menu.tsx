import React, {useEffect, useRef} from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {DropdownMenu} from "./DropdownMenu";
import {MenuIcon} from '../../../Icons';

interface fff {
    onClose?: () => void
}

export function Menu({onClose} : fff) {
    const ref = useRef<HTMLDivElement>(null)
    function handleClick() {
        if (ref.current != null) console.log(ref.current.getBoundingClientRect())
    }
    return (
        <div className={styles.menu} onClick={handleClick} ref={ref}>
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

