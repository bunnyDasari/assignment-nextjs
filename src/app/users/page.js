"use client"

import { useState } from "react";
import styles from './styles.module.css'
const UserRoute = () => {
    const [firstName, setName] = useState("");
    const [SecName, setSEc] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const onclickSubmit = async () => {
        console.log(firstName, SecName, password, email)
        let res = await fetch("http://localhost:3000/api/product", {
            method: "POST",
            body: JSON.stringify({ firstName, SecName, password, email })
        })
        res = await res.json()
        if (res.success) {
            alert("User created")
        }
    }
    return (
        <div className={styles.bg}>
            <h1>POST REQUEST</h1>
            <input type="text" placeholder="firstname" onChange={(e) => setName(e.target.value)} value={firstName} className={styles.inp} />
            <br />
            <input type="text" placeholder="secoundname" onChange={(e) => setSEc(e.target.value)} value={SecName} className={styles.inp}/>
            <br />
            <input type="text" placeholder="password" onChange={(e) => setPass(e.target.value)} value={password} className={styles.inp}/>
            <br />
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} className={styles.inp}/>
            <br />
            <button onClick={onclickSubmit} className={styles.btn}>submit</button>

        </div>
    )
}
export default UserRoute;
