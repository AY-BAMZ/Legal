import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ContactUsBody from './ContactUsBody'

function ContactUs() {
  return (
    <div>
        <Header />
        <ContactUsBody />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default ContactUs