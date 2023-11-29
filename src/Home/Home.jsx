import React from 'react';
import Banner from './Banner';
import Premiummmbr from '../Pages/Premiummmbr/Premiummmbr';
import HowItWorks from '../Pages/HowItWorks/HowItWorks';
import Success from '../Pages/HowItWorks/Success';
import SuccessStories from '../Pages/HowItWorks/SuccessStories';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Premiummmbr></Premiummmbr>
          <HowItWorks></HowItWorks>
          <Success></Success>
          <SuccessStories></SuccessStories>
        
         
        </div>
    );
};

export default Home;