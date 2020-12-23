import React from "react";
import styles from'./App.module.css';
import { useEffect,useState } from 'react';

const App=()=> {
  const [date,setDate]=useState(new Date())
  useEffect(()=>{
   const timer=setInterval(()=>{
    setDate(new Date())
  },1000)
  return ()=>{
    if(timer){
      clearInterval(timer)
    }
  }
  },[])
  
  return (
    <div className={styles.container}>
      <p className={styles.para1}>Time:{date.toLocaleTimeString()}</p>
      <p className={styles.para2}>Date:{date.toLocaleDateString()}</p>
    </div>
  );
}

export default App;
