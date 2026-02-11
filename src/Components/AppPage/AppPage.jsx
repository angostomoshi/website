import React from 'react'
import './AppPage.css'
import Home from '../../assets/Home.png'
import AppStoreDownload from '../../assets/apple-store-download.jpg'
import PlayStoreDownload from '../../assets/google-play-download.png'
import ap from '../../assets/ap.png'

export const AppPage = () => {
    return (
        <div id='AppPage' className='App_page container'>
           
            <div className='App_page_right'>
                <h3> Access integrated <br /> healthcare from <br />your <span>mobile phone</span> </h3>
                <p style={{ fontSize: '1rem', color: '#FDFDFD', marginTop: '0.5rem', opacity: '0.9' }}>
                    Powered by <strong style={{ color: '#FF6B35' }}>Funsoft</strong>
                </p>
                <div className='download-options'>
                    <img src={AppStoreDownload} alt="Download on App Store" className='apple'/>
                    <img src={PlayStoreDownload} alt="Get it on Google Play" className='playstore'/>
                </div>
            </div>

            <div className='App_page_left'>
                <img src={ap} alt="Funsoft mobile app preview" />
            </div>
        </div>
    )
}

export default AppPage