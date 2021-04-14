import React from 'react';
import s from './Videos.module.css';

const Videos = (props) => {
    return (
        <div className={s.videoComponent}>
            <div className={s.maneText}><iframe width="560" height="315" src="https://www.youtube.com/embed/24G5Tgcvdz4"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe></div>
            <div className={s.maneText}>{props.video.name}</div>
            <video className={s.video} src={props.video.video} controls/>
            <hr className={s.hr}/>
        </div>
    );
};

export default Videos;