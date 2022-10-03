import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import PracticesBody from './PracticesBody'

function Practices() {
  return (
    <div className='practices'>
      <Header />
      <PracticesBody />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Practices