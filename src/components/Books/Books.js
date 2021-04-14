import React from 'react';
import s from './Books.module.css';
import {NavLink} from "react-router-dom";

const Books = (props) => {

        return (
            <>
                    <div>{props.book && <hr className={s.hr}/>}
                        <div className={s.book}>
                            <div className={s.flex}>
                                <div><img className={s.newsPhoto} src={props.book ? props.book.photo : props.photo} alt=""/>
                                </div>
                                <div className={s.description}>
                                        <div className={s.bookHeader}>{props.book ? props.book.header : props.header}</div>
                                        <div className={s.text}>{props.book ?
                                            <div>
                                                <span>Описание: </span>{props.book.description}</div>
                                            : props.description}
                                        </div>
                                </div>
                            </div>
                            {props.book && <div className={`${s.text} ${s.buy}`}><a href={props.book.buy}>Купить</a></div>}
                            {props.read && <div className={`${s.text} ${s.read}`}><a href={props.read}>Читать</a></div>}
                        </div>
                    </div>
            </>
        );
    }
;

export default Books;