import React from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
}

export function Dropdown({button, children}: IDropdownProps) {
    let node = null
    if (typeof document !== 'undefined') {
        node = document.getElementById('dropdown')
    }
    if (!node) return null
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
    return ReactDOM.createPortal((
        <div className={styles.container}>
            <div className={styles.main}>
                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {button}
                </div>
                {isDropdownOpen && (
                    <div className={styles.listContainer}>
                        <div  className={styles.list}>
                            {children}
                            {<p className={styles.closeButton} onClick={() => setIsDropdownOpen(false)}>Закрыть</p>}
                        </div>
                        {<div className={styles.bg} onClick={() => setIsDropdownOpen(false)}></div>}
                    </div>
                )}
            </div>
        </div>
    ), node);

}


