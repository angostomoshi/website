import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './LegalPages.css'

export const CookiePolicyPage = () => {
  return (
    <div className='legal-page'>
      <Navbar />
      <main className='legal-main'>
        <section className='legal-hero'>
          <p className='legal-kicker'>Legal</p>
          <h1>Cookie Policy</h1>
          <p className='legal-updated'>Last updated: March 7, 2026</p>
        </section>

        <section className='legal-card'>
          <p className='legal-intro'>
            This policy describes how cookies and similar technologies are used on the Funsoft I-HMIS website.
          </p>

          <article className='legal-section'>
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device to help websites function and improve user experience.
            </p>
          </article>

          <article className='legal-section'>
            <h2>How We Use Cookies</h2>
            <ul className='legal-list'>
              <li>Essential cookies to support core website functionality.</li>
              <li>Analytics cookies to understand page usage and improve performance.</li>
              <li>Preference cookies to remember user settings where applicable.</li>
            </ul>
          </article>

          <article className='legal-section'>
            <h2>Third-Party Services</h2>
            <p>
              Some analytics or embedded features may set cookies through trusted providers. Their processing is
              governed by their own privacy terms.
            </p>
          </article>

          <article className='legal-section'>
            <h2>Managing Cookie Preferences</h2>
            <p>
              You can control or delete cookies from your browser settings. Disabling some cookies may affect site
              behavior and convenience.
            </p>
          </article>

          <p className='legal-note'>
            Cookie policy questions: <a className='legal-contact-link' href='mailto:info@systempartners.biz'>info@systempartners.biz</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CookiePolicyPage
