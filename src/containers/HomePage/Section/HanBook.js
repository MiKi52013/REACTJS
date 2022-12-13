import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class HanBook extends Component {
    render() {

        return (
            <div className='section-share section-hanbook'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className='title-section'> Cẩm nang </span>
                        <button className='btn-section'> Xem thêm </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-img section-hanbook' />
                                <div>H1</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-hanbook' />
                                <div>H2</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-hanbook' />
                                <div>H3</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-hanbook' />
                                <div>H4</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-hanbook' />
                                <div>H5</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-hanbook' />
                                <div>H6</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(HanBook);
