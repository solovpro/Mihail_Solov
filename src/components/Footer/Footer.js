import React from 'react';
import s from './Footer.module.css';
import inst from "../../assets/images/Instagram-logo.png";
import face from "../../assets/images/facebook.png";
import vk from "../../assets/images/vk.png";
import stihi from "../../assets/images/стихи.png";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s.text} ${s.big}`}>Михаил Соловьёв. </div>
            <div className={s.text}>Создание  и поддержка сайта: Дмитрий Соловьёв</div>
            <div className={`${s.text} ${s.litle}`}>Официальный сайт - © 2021</div>
        </div>
    );
};

export default Footer;