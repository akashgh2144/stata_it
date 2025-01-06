import React from 'react';
import HotelBanner from '../../Hotel_Animation/HotelBanner/HotelBanner';
import AnimatedCard from '../../Hotel_Animation/AnimatedCard/AnimatedCard';
import AnimationCard from '../../Hotel_Animation/AnimationCard/AnimationCard';
import BannerHero from '../../components/BannerHero';
const Hotel = () => {
    return (
        <div>
           <HotelBanner></HotelBanner>
           <AnimatedCard></AnimatedCard>
           <AnimationCard></AnimationCard>
          <BannerHero></BannerHero>

           
           
        </div>
    );
};

export default Hotel;