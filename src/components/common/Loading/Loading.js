import React from 'react';
import loading from '../../../assets/images/loading.gif';
import s from './Loading.module.css';

const Loading = () => {
    return (
        <div>
            <img className={s.loading} src={loading} alt=""/>
        </div>
    );
};

export default Loading;