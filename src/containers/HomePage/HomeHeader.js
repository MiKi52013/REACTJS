import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/images/sila_logo.svg'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils/constant";
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event: actions
    }
    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo} />
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.helloA" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.helloa" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.helloB" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.hellob" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.helloC" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.helloc" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.helloD" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.hellod" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeheader.support" /> </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>Vi</span>
                            </div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>En</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'> <FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm kiếm abc vui từng giờ' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child1'>
                                <div className='icon-child1'>
                                    <i className="fa fa-regular fa-eye"></i></div>
                                <div className='text-child1'>A1</div>
                            </div>
                            <div className='option-child1'>
                                <div className='icon-child1'>
                                    <i className="fab fa-brands fa-cloudscale"></i></div>
                                <div className='text-child1'>A2</div>
                            </div>
                            <div className='option-child1'>
                                <div className='icon-child1'>
                                    <i className="fa fa-light fa-broom"></i></div>
                                <div className='text-child1'>A3</div>
                            </div>
                            <div className='option-child1'>
                                <div className='icon-child1'>
                                    <i className="fab fa-brands fa-free-code-camp"></i></div>
                                <div className='text-child1'>A4</div>
                            </div>
                            <div className='option-child1'>
                                <div className='icon-child1'>
                                    <i className="fab fa-brands fa-slack"></i></div>
                                <div className='text-child1'>A5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
