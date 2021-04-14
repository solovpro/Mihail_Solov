import React from 'react';
import s from '../Main.module.css';

const NewsMain = (props) => {
    return (
        <div className={s.news}>
            <div className={s.newsPhoto}><img src={props.new.photo} alt=""/></div>
            <div>
                <div className={s.newsHeader}>{props.new.header}</div>
                <div className={s.text}>{props.new.text}</div>
            </div>
        </div>
    );
};

export default NewsMain;