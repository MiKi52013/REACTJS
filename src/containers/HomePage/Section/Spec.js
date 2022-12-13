import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class spec extends Component {
    render() {

        return (
            <div className='section-share section-spec'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className='title-section'> AOA</span>
                        <button className='btn-section'> Xem thêm </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-img section-spec' />
                                <div>K1</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-spec' />
                                <div>K2</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-spec' />
                                <div>K3</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-spec' />
                                <div>K4</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-spec' />
                                <div>K5</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-spec' />
                                <div>K6</div>
                            </div>
                        </Slider>
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
export default connect(mapStateToProps, mapDispatchToProps)(spec);
