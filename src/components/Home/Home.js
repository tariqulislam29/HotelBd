import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../BookRooms/Books';
import Check from '../CheckAvailability/Check';
import Pictures from '../GalleryPictures/Pictures';
import Pricing from '../Pricing/Pricing';
import Stafs from '../Stafs/Stafs';
import Welcome from '../Welcome/Welcome';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Check></Check>
            <Welcome></Welcome>
            <Books></Books>
            <Stafs></Stafs>
            <Pricing></Pricing>
            <Pictures></Pictures>

        </div>
    );
};

export default Home;