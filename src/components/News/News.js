import React from 'react';
import s from './News.module.css';

const News = (props) => {
    return (
        <div className={s.newsBlock}>
            <div className={s.newsHeader}>{props.new.header}</div>
            <hr className={s.hr}/>
            <div className={s.flex}>
                <div><img className={s.newsPhoto} src={props.new.photo} alt=""/></div>
                <div className={s.text}>{props.new.text}</div>
            </div>
        </div>
    );
};


export default News;