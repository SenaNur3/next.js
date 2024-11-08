'use client'

import React, { useEffect, useState } from "react";
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {
/*   const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  const [isloading, setIsloading] = useState(false)

 useEffect(()=>{
  const getData = async ()=>{
    setIsloading(true)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      cache: "no-cache", 
    });
  
    if (!res.ok) {
      setErr(true)
    }

    const data = await res.json()
    
    setData(data)
    setIsloading(false)
  }
  getData()
 },[]) */

 const fetcher = (...args) => fetch(...args).then(res => res.json())
 const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  console.log(data)
  return <div>Dashboard</div>;
};
export default Dashboard;
