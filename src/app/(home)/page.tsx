
import React from 'react';
import { BannerSection } from '../components/ui/BannerSection';
import HotProducts from '../components/ui/HotProducts';
import NewArrived from '../components/ui/NewArrived';
import PopularCategories from '../components/ui/PopularCategories';
import GadgetBanner from '../components/ui/GadgetBanner';

const page = () => {
  return (
    <div>
      <BannerSection/>
     <HotProducts/>
     <NewArrived/>
     <PopularCategories/>
     <GadgetBanner/>

    </div>
  );
};

export default page;
