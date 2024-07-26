"use client"

import {useState } from "react";
import styles from './styles.module.css'
const UserRoute = (props) => {
    const [firstName, setName] = useState("");
    const [SecName, setSEc] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState();

    const onClickUser = ()=>{
        alert(`user updated with id : ${id}`)
    }
    return (
        <div className={styles.bg}>
            <h1>PUT REQUEST</h1>
            <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} value={id} className={styles.inp} />
            <br/>
            <input type="text" placeholder="firstname" onChange={(e) => setName(e.target.value)} value={firstName} className={styles.inp} />
            <br />
            <input type="text" placeholder="secoundname" onChange={(e) => setSEc(e.target.value)} value={SecName} className={styles.inp} />
            <br />
            <input type="text" placeholder="password" onChange={(e) => setPass(e.target.value)} value={password} className={styles.inp} />
            <br />
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} className={styles.inp} />
            <br />
            <button onClick={onClickUser} className="btn">submit</button>

        </div>
    )
}
export default UserRoute;