import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview} >
      <img className={styles.previewImg} src="https://cdn.dribbble.com/userupload/3249725/file/original-2050fea979f4c3d04313e2be81236275.jpg?compress=1&crop=49x375-1242x1270&resize=400x300&vertical=top" alt="" />
    </div>
  );
}
