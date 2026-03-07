import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './LegalPages.css'

export const PrivacyPolicyPage = () => {
  return (
    <div className='legal-page'>
      <Navbar />
      <main className='legal-main'>
        <section className='legal-hero'>
          <p className='legal-kicker'>Legal</p>
          <h1>Privacy Policy</h1>
          <p className='legal-updated'>Last updated: March 7, 2026</p>
        </section>

        <section className='legal-card'>
          <p className='legal-intro'>
            Funsoft I-HMIS respects patient, provider, and partner privacy. This policy explains how
            information is handled when you use our website and request product information.
          </p>

          <article className='legal-section'>
            <h2>Information We Collect</h2>
            <ul className='legal-list'>
              <li>Contact details you submit, such as name, email, phone number, and organization.</li>
              <li>Inquiry content you send through forms, email links, or demo requests.</li>
              <li>Basic technical data like browser type and device information for performance analytics.</li>
            </ul>
          </article>

          <article className='legal-section'>
            <h2>How We Use Information</h2>
            <p>
              We use submitted information to respond to inquiries, schedule demos, provide customer support,
              and improve service quality. We do not sell personal data.
            </p>
          </article>

          <article className='legal-section'>
            <h2>Security and Retention</h2>
            <p>
              We apply practical safeguards for business and healthcare contexts, including controlled access
              and secure operational practices. Data is retained only for legitimate service and compliance needs.
            </p>
          </article>

          <article className='legal-section'>
            <h2>Your Rights</h2>
            <p>
              You may request access, correction, or deletion of personal information, subject to legal and
              contractual obligations.
            </p>
          </article>

          <p className='legal-note'>
            Privacy requests or questions: <a className='legal-contact-link' href='mailto:info@systempartners.biz'>info@systempartners.biz</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
