"use client"
import React, { useState, useEffect } from 'react';
import Link  from "next/link";
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'
const App = ()=>{
  const route = useRouter()
  const onClickPost = ()=>{
     route.push("./users")
  }
  const onclickGet = ()=>{
    route.push("./api/product")
  }
  const onclickUpdate = ()=>{
    route.push("./users/id")
  }
  const onclickDelete = ()=>{
    route.push("./del")
  }
  return(
    <div className={styles.bg}>
      <button className={styles.btn} onClick={onclickGet}>GET</button>
      <button className={styles.btn} onClick={onClickPost}>POST</button>
      <button className={styles.btn} onClick={onclickUpdate}>UPDATE</button>
      <button className={styles.btn} onClick={onclickDelete}>DELETE</button>
    </div>
  )
}
export default App