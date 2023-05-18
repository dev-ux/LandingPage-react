import React from 'react';
import Navbar from './Navbar';//appel de la Nav
import Navbar2 from './Navbar2'; //appel du du menu 2
import ImgSlide from '../Conf/banner.png'; // appel de la banner(image)
import Article from '../Composants/Article'; //appel de l'article
import Footer from './Footer'; //appel du footer

const Home = () => {
  return (
    <div className='home-container'>
        
        <Navbar />
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={ImgSlide} alt="" />
            </div>

            <div className='home-text-section'>
                <h3 className='primary-heading'>
                    Article du jour
                </h3>

                <p className='sous-titre'>
                    Sport
                </p>

                <h1 className='sous-titre2'>
                    Course contre le cancer: <br/>
                    l'évènement sportif à ne pas
                    manquer
                </h1>

                <button className='btnlecture'>Lire l'article</button>
            </div>
        </div>

        <div className='home-section-container'>
        <Navbar2 />
        </div>
        <hr/>
        <br/>

        <div className='home-section-container'>
        <Article />
        </div>

        <div className='home-section-container'>
        <Footer />
        </div>

    </div>

    
  );
};

export default Home