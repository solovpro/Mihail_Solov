import React from 'react';
import s from './Header.module.css';
import face from '../../assets/images/facebook.png';
import vk from '../../assets/images/vk.png';
import inst from '../../assets/images/Instagram-logo.png';
import stihi from '../../assets/images/стихи.png';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.name}>Михаил Соловьёв</div>
            <div className={s.contacts}>
                <a href="https://www.instagram.com/miha_solovyev/" ><img className={s.contact} src={inst} alt=""/></a>
                <a href="https://www.facebook.com/profile.php?id=100004339570991" ><img className={s.contact} src={face} alt=""/></a>
                <a href="https://vk.com/misha8181" ><img className={s.contact} src={vk} alt=""/></a>
                <a href="https://stihi.ru/avtor/misha29" ><img className={s.contact} src={stihi} alt=""/></a>
            </div>
        </div>
    );
};

export default Header;