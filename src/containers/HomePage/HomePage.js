import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Spec from './Section/Spec';
import Doctor from './Section/Doctor';
import HanBook from './Section/HanBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import './HomePage.scss';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <div>
                <HomeHeader />
                <Spec settings={settings} />
                <Doctor settings={settings} />
                <HanBook settings={settings} />
                <About />
                <HomeFooter />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};
const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
