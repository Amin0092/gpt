import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
}
export function Dropdown({button, children}: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {button}
                </div>
                {isDropdownOpen && (
                    <div className={styles.listContainer}>
                        <div onClick={() => console.log(children)} className={styles.list}>
                            {children}
                            {<p className={styles.closeButton} onClick={() => setIsDropdownOpen(false)}>Закрыть</p>}
                        </div>
                        {<div className={styles.bg} onClick={() => setIsDropdownOpen(false)}></div>}
                    </div>
                )}
            </div>
        </div>
    );
}


