"use client"
import React from 'react'
import useSWR from 'swr'
import style from "./page.module.css"
import { useState } from 'react'
import { useEffect } from 'react'


const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [isloading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" })
  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = res.json
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData();
  // }, []);
  // console.log(data)
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  
  return (
    <div>
      <h1>this is dashboard</h1>
    </div> 
  )
}

export default Dashboard
