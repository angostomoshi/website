import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './LegalPages.css'

export const TermsOfServicePage = () => {
  return (
    <div className='legal-page'>
      <Navbar />
      <main className='legal-main'>
        <section className='legal-hero'>
          <p className='legal-kicker'>Legal</p>
          <h1>Terms of Service</h1>
          <p className='legal-updated'>Last updated: March 7, 2026</p>
        </section>

        <section className='legal-card'>
          <p className='legal-intro'>
            These terms govern use of Funsoft I-HMIS website materials, communications, and service requests.
            By using this site, you agree to these terms.
          </p>

          <article className='legal-section'>
            <h2>Use of Website</h2>
            <p>
              Content is provided for general information about Funsoft healthcare technology solutions. You agree
              to use the website lawfully and not interfere with its operation.
            </p>
          </article>

          <article className='legal-section'>
            <h2>Service Information</h2>
            <p>
              Product descriptions, implementation timelines, and pricing guidance on the website may change.
              Final scope and terms are confirmed through formal proposals or contracts.
            </p>
          </article>

          <article className='legal-section'>
            <h2>Intellectual Property</h2>
            <p>
              Website branding, design elements, and content are owned by or licensed to Funsoft I-HMIS and may
              not be copied for commercial use without permission.
            </p>
          </article>

          <article className='legal-section'>
            <h2>Liability</h2>
            <p>
              We strive for accurate information, but the website is provided on an "as available" basis. Funsoft
              is not liable for indirect or consequential losses arising from website use.
            </p>
          </article>

          <p className='legal-note'>
            Contract and terms inquiries: <a className='legal-contact-link' href='mailto:info@systempartners.biz'>info@systempartners.biz</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TermsOfServicePage
