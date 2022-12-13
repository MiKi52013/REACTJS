import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về Movex
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="50%" height="400"
                            src="https://www.youtube.com/embed/e4zAKMIOggA?list=RDe4zAKMIOggA"
                            title="Ý thức em mặt trời tỏ rạng 🌼 Trình bày: Lô Thủy 🌼 thơ & nhạc: Nhất Hạnh"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>ABC_Vui từng giờ</p>
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};
const mapDispatchToProps = dispatch => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
