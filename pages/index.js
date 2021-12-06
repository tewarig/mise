import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainOfferCard from './comp/mainOfferCard'
import NavBar from './comp/navbar'
import OfferSection from './comp/offerSection'
import ShopCategories from './comp/shopCat'
import Footer from './comp/footer'

const meowData = [{
  name: 'Winter wear',
  photoLink: 'https://images.unsplash.com/photo-1637790156083-da76c003db2b?ixid=MnwxMjA3fDB8MXxhbGx8MTMwfHx8fHx8Mnx8MTYzODYyNjQ0Mg&ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=120&h=200&q=60' ,
  link: '/categories/winter'
}, 
{
  name: 'Paty Wear',
  photoLink: 'https://media.istockphoto.com/photos/we-are-going-to-party-as-if-theres-no-tomorrow-picture-id1279483477?b=1&k=20&m=1279483477&s=170667a&w=0&h=cWwEBw0uErqkzeCHcJnoih7dU_Gr_DnKdYitDgSvhqw=',
  link: '/categories/party'
} , {
  name: 'Breach Wear',
  photoLink : 'https://images.unsplash.com/photo-1611244806964-91d204d4a2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=100',
  link: '/categories/beach'
} ,{
  name: 'Traditional',
  photoLink: 'https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=90',
  link: '/categories/traditional'
}];

export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <OfferSection/>
    <MainOfferCard imageLink="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80" cardText="Browse Plane T-shirts" />
    <ShopCategories cardData={meowData}/>
    <Footer/>
    </>
    
  )
}
