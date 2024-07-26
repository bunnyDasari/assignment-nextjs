"use client"

import {useState } from "react";
import styles from './styles.module.css'
const UserRoute = (props) => {
    const [id, setId] = useState();

    const onClickUser = ()=>{
        alert(`user deleted with id : ${id}`)
    }
    return (
        <div className={styles.bg}>
            <h1>DELETE REQUEST</h1>
            <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} value={id} className={styles.inp} />
            <button onClick={onClickUser} className={styles.btn}>submit</button>
        </div>
    )
}
export default UserRoute;