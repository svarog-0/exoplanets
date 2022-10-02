import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Planet } from '../models/planet.model'   
import useSWR from 'swr'

const fetcher = (requestInfo: RequestInfo)  => fetch(requestInfo).then((res) : Promise<Planet[]> => res.json());

const Home: NextPage = () => {
  const { data, error } : {data : Planet[], error: any} = useSWR('/api/data', fetcher)

  if (error) return <p>{error}</p>
  if (!data) return <p>No profile data</p>

  return (
    <table>
      <thead>
        <td><b>#</b></td>
        <td><b>Name</b></td>
        <td><b>Star</b></td>
      </thead>
      {data.map((planet, index) =>
        <tr>
          <td>{index}</td>
          <td>{planet.pl_name}</td>
          <td>{planet.hostname}</td>
        </tr>
      )}
    </table>
  )
}

export default Home
