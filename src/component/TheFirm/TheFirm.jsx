import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import TheFirmBody from './TheFirmBody'

function TheFirm() {
  return (
    <div className='theFirm'>
        <Header />
        <TheFirmBody />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default TheFirm