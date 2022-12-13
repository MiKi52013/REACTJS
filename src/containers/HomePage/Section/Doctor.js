import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import * as actions from '../../../store/actions';

class Doctor extends Component {
    componentDidMount() {
        this.props.loadTopDoctors()
    }
    render() {
        console.log('Check topDoctorsRedux: ', this.props.topDoctorsRedux)
        return (
            <div className='section-share section-doctor'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className='title-section'> DOCTOR </span>
                        <button className='btn-section'> Xem thêm </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-img section-doctor' />
                                <div>M1</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-doctor' />
                                <div>M2</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-doctor' />
                                <div>M3</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-doctor' />
                                <div>M4</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-doctor' />
                                <div>M5</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-doctor' />
                                <div>M6</div>
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
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
