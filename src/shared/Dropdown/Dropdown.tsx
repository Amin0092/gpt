import React, {useRef} from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
}

export function Dropdown({button, children}: IDropdownProps) {

    const ref = useRef<HTMLDivElement>(null)
    const secref = useRef<HTMLDivElement>(null)
    function HandleClick() {
        if (ref.current != null) console.log(ref.current.getBoundingClientRect())
        if (secref.current != null) console.log(secref.current.getBoundingClientRect())
    }

    let node = null

    if (typeof document !== 'undefined') {
        node = document.getElementById('dropdown')
    }
    if (!node) return null

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

    return ReactDOM.createPortal((
        <div className={styles.container} onClick={HandleClick}>

            <div className={styles.main}>

                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} ref={ref}>
                    {button}
                </div>

                {isDropdownOpen && (
                    <div className={styles.listContainer} ref={secref}>
                        <div className={styles.list}>
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


