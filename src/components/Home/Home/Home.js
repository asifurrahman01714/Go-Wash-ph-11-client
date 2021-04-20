import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';

import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;