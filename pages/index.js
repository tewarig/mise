import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainOfferCard from './comp/mainOfferCard'
import NavBar from './comp/navbar'

export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <MainOfferCard imageLink="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80" cardText="Browse Plane T-shirts" />
    </>
    
  )
}
