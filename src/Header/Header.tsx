import React from 'react';
import pic from './../me.jpg';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">

      <img className="header__image" src={pic} alt="me"/>

      <div className="header__info">
        <h1 className="header__name">Mikhail Kutateladze</h1>
          <p className="header__position"> Software Engineer - Frontend </p>
          {/*<p className="header__position"> <span className='header__experience'>5+ years of experience</span> </p>*/}
      </div>

      <div className="header__contacts">
        <div className="header__contacts-row">
          <a href="mailto:michael.kutateladze@gmail.com">
            <i className="far fa-envelope"/>michael.kutateladze@gmail.com
          </a>
        </div>
        {/*<div className="header__contacts-row">*/}
        {/*  <a href="https://www.linkedin.com/in/michaeladze/" target='_blank'>*/}
        {/*    <i className="fab fa-linkedin"/>michaeladze*/}
        {/*  </a>*/}
        {/*</div>*/}
        <div className="header__contacts-row"><i className="fas fa-phone"/>+7 (916) 924 26 94</div>
        <div className="header__contacts-row"><i className="fas fa-map-marker-alt"/>Moscow, Russia</div>
      {/*  Willing to relocate */}
      </div>

    </header>
  );
};

export default Header;
