import React from 'react';
import pic from './../me.jpg';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">

      <img className="header__image" src={pic} alt="me"/>

      <div className="header__info">
        <h1 className="header__name">Michael Kutateladze</h1>
          <p className="header__position"> Software Engineer </p>
          <p className="header__position"> <span className='header__experience'>4+ years experience</span> </p>
      </div>

      <div className="header__contacts">
        <div className="header__contacts-row"><i className="far fa-envelope"/>michael.kutateladze@yandex.ru</div>
        <div className="header__contacts-row"><i className="fas fa-phone"/>+7 (916) 924 26 94</div>
      </div>

    </header>
  );
};

export default Header;
