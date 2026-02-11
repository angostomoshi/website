import React from 'react'
import './Contact.css'
import envelope_icon from '../../assets/envelope.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

export const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

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
                                    <p className='contact-content'>Westlands Business Park, 4th Floor, Chiromo Ln, Nairobi, Kenya</p>
                                </div>
                            </div>
                            
                            <div className='contact-detail-item'>
                                <div className='contact-icon'>
                                    <img src={email} alt="Email" />
                                </div>
                                <div className='contact-text'>
                                    <h4 className='contact-subtitle'>Email</h4>
                                    <h5 className='contact-label'>Email Address</h5>
                                    <p className='contact-content'>info@systempartners.biz</p>
                                </div>
                            </div>
                            
                            <div className='contact-detail-item'>
                                <div className='contact-icon'>
                                    <img src={phone} alt="Phone" />
                                </div>
                                <div className='contact-text'>
                                    <h4 className='contact-subtitle'>Phone</h4>
                                    <h5 className='contact-label'>Phone Numbers</h5>
                                    <p className='contact-content'>+254 20 7857779 / 7855355</p>
                                    <p className='contact-content'>+254 714 433693</p>
                                    <p className='contact-content'>+254 733 367427</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='contact-hours'>
                            <h4 className='contact-subtitle'>Business Hours</h4>
                            <p className='contact-content'>Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p className='contact-content'>Saturday: 9:00 AM - 1:00 PM</p>
                            <p className='contact-content'>Sunday: Closed</p>
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