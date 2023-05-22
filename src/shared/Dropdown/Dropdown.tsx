import React, {useRef, useState} from 'react';
import styles from './dropdown.css';
import {positionContext} from "../context/positionContext";

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
}

export function Dropdown({button, children}: IDropdownProps) {
    const [position, setPosition] = useState({})
    const ref = useRef<HTMLDivElement>(null)

    function HandleClick() {
        if (ref.current != null) {
            const DOMData = ref.current.getBoundingClientRect()
            const positions = {
                pTop: DOMData.top,
                pLeft: DOMData.left
            }
            console.log(DOMData)
            setPosition(positions)
        }
    }

    let node = null

    if (typeof document !== 'undefined') {
        node = document.getElementById('dropdown')
    }
    if (!node) return null

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    return (
        <positionContext.Provider value={position}>

            <div className={styles.container} onClick={HandleClick}>

                <div className={styles.main}>

                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} ref={ref}>
                        {button}
                    </div>

                    {isDropdownOpen && (
                        <div className={styles.listContainer}>
                            <div className={styles.list}>
                                {children}

                            </div>
                            {<div className={styles.bg} onClick={() => setIsDropdownOpen(false)}></div>}
                        </div>
                    )}
                </div>
            </div>
        </positionContext.Provider>
    );
}


