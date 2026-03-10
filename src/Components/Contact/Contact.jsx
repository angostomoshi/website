import React, { useState, useEffect } from 'react'
import './Contact.css'
import envelope_icon from '../../assets/envelope.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import { getDocs, collection } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase_config";

export const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(true);
    const [contactInfo, setContactInfo] = useState({
        location: "Westlands Business Park, 4th Floor, Chiromo Ln, Nairobi, Kenya",
        emails: [],
        phones: [],
        businessHours: {
            weekdays: "8:00 AM - 5:00 PM",
            saturday: "9:00 AM - 1:00 PM",
            sunday: "Closed"
        }
    });

    // Fetch contact data from Firebase
    const fetchContactData = async () => {
        try {
            setLoading(true);
            
            // Fetch contacts
            const contactsRef = collection(db, "profile", "data", "contacts");
            const contactsSnapshot = await getDocs(contactsRef);
            let contacts = [];
            contactsSnapshot.forEach((doc) => {
                contacts.push({ id: doc.id, ...doc.data() });
            });

            // Fetch profile info (for location)
            const profileInfoRef = collection(db, "profile", "data", "info");
            const profileInfoSnapshot = await getDocs(profileInfoRef);
            let profileInfo = {};
            profileInfoSnapshot.forEach((doc) => {
                if (doc.id === "main") {
                    profileInfo = doc.data();
                }
            });

            // Process contacts into emails and phones
            const emails = contacts.filter(c => 
                c.type === 'email' || c.type === 'personal'
            ).map(c => c.value) || [];
            
            const phones = contacts.filter(c => 
                c.type === 'mobile' || c.type === 'work' || c.type === 'home'
            ).map(c => c.value) || [];

            setContactInfo(prev => ({
                ...prev,
                location: profileInfo.location || prev.location,
                emails: emails,
                phones: phones
            }));

        } catch (error) {
            console.error("Error fetching contact data:", error);
        } finally {
            setLoading(false);
        }
    };

    // Load contact data from Firebase
    useEffect(() => {
        fetchContactData();
        
        // Set up polling to check for updates every 30 seconds
        const interval = setInterval(() => {
            fetchContactData();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "44b10d58-6eb4-4144-8511-0b50b66a28f9");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            
            const data = await res.json();
            
            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                setResult("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.log("Error", error);
            setResult("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='Contact' className='contact-full-page'>
            <div className='contact-container'>
                <div className='contact-info-section'>
                    <div className='contact-info-card'>
                        <h2 className='contact-info-title'>Contact Information</h2>
                        <p className='contact-intro'>
                            Please complete the form to connect with our team and we'll get back to you immediately.
                        </p>
                        
                        <div className='contact-details'>
                            <div className='contact-detail-item'>
                                <div className='contact-icon'>
                                    <img src={location} alt="Location" />
                                </div>
                                <div className='contact-text'>
                                    <h4 className='contact-subtitle'>Location</h4>
                                    <h5 className='contact-label'>Office Address</h5>
                                    {loading ? (
                                        <p className='contact-content loading'>Loading...</p>
                                    ) : (
                                        <p className='contact-content'>{contactInfo.location}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className='contact-detail-item'>
                                <div className='contact-icon'>
                                    <img src={email} alt="Email" />
                                </div>
                                <div className='contact-text'>
                                    <h4 className='contact-subtitle'>Email</h4>
                                    <h5 className='contact-label'>Email Addresses</h5>
                                    {loading ? (
                                        <p className='contact-content loading'>Loading...</p>
                                    ) : contactInfo.emails.length > 0 ? (
                                        contactInfo.emails.map((email, index) => (
                                            <p key={index} className='contact-content'>
                                                <a href={`mailto:${email}`} className='contact-link'>
                                                    {email}
                                                </a>
                                            </p>
                                        ))
                                    ) : (
                                        <p className='contact-content'>No email addresses available</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className='contact-detail-item'>
                                <div className='contact-icon'>
                                    <img src={phone} alt="Phone" />
                                </div>
                                <div className='contact-text'>
                                    <h4 className='contact-subtitle'>Phone</h4>
                                    <h5 className='contact-label'>Phone Numbers</h5>
                                    {loading ? (
                                        <p className='contact-content loading'>Loading...</p>
                                    ) : contactInfo.phones.length > 0 ? (
                                        contactInfo.phones.map((phone, index) => (
                                            <p key={index} className='contact-content'>
                                                <a href={`tel:${phone.replace(/\s/g, '')}`} className='contact-link'>
                                                    {phone}
                                                </a>
                                            </p>
                                        ))
                                    ) : (
                                        <p className='contact-content'>No phone numbers available</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        <div className='contact-hours'>
                            <h4 className='contact-subtitle'>Business Hours</h4>
                            <p className='contact-content'>Monday - Friday: {contactInfo.businessHours.weekdays}</p>
                            <p className='contact-content'>Saturday: {contactInfo.businessHours.saturday}</p>
                            <p className='contact-content'>Sunday: {contactInfo.businessHours.sunday}</p>
                        </div>
                    </div>
                </div>
                
                <div className='contact-form-section'>
                    <div className='contact-form-card'>
                        <h2>Send Us a Message</h2>
                        <form onSubmit={onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name">Name *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder='Enter your full name' 
                                    required 
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor="phone">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder='Enter your phone number'
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor="email">Email Address *</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder='Enter your email address'
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor="subject">Subject *</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder='Enter message subject'
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor="message">Message *</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    placeholder='Enter your message here...'
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            
                            <button 
                                type='submit' 
                                className='submit-btn'
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            <div className='form-result'>
                                {result && <span className={`result-message ${result.includes('successfully') ? 'success' : ''}`}>{result}</span>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact