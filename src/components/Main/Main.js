import React from 'react';
import s from './Main.module.css';
import photo from '../../assets/images/mainphoto.png';
import NewsMain from "./NewsMain/NewsMain";
import cherv from "../../assets/images/ахахахахаахах_червь.webp";
import Books from "../Books/Books";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Main extends React.Component {

    render() {
        return (
            <div className={s.main}>
                <div className={s.maneText}>
                    Главная
                    <hr className={s.hr}/>
                </div>
                <div>
                    <div className={s.title}>Михаил Соловьев</div>
                    <hr className={s.hr}/>
                    <div className={s.hello}>
                        <div><img className={s.img} src={photo} alt=""/></div>
                        <div className={s.text}>
                            <div className={s.biography}>Михаил Соловьев родился 28 марта 1981 года в Москве, в семье
                                педагогов.
                                По образованию...
                                <NavLink to='/biography' activeClassName={s.activeLink}>Читать далее</NavLink>
                            </div>
                            <ul>
                                <li>Поэт</li>
                                <li>Писатель</li>
                                <li>Сценарист</li>
                                <li>Драматург</li>
                                <li>Член Союза Писателей России</li>
                                <li>Член Международной Академии Русской Словесности</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={s.title}>Книжный червь</div>
                    <hr className={s.hr}/>
                    <div className={s.citata}>
                        <div className={s.books}>
                            <Books name={'Книжный червь'} photo={cherv}
                                   read={"https://www.litres.ru/mihail-solovev-8341840/knizhnyy-cherv/chitat-onlayn/"}/>
                        </div>
                        <div>
                            {this.props.textBook}
                            <span className={s.span}>МИХАИЛ СОЛОВЬЁВ "КНИЖНЫЙ ЧЕРВЬ"</span>
                        </div>
                    </div>
                </div>
                <div className={s.mainText}/>
                <div className={s.title}>Новости</div>
                <hr className={s.hr}/>
                <div className={s.blockNews}>
                    <Carousel showStatus={true} autoPlay={true} interval={'2000'} infiniteLoop={true}
                              className={s.slider} width={'1000px'}
                              showArrows={true}>
                        {this.props.news.map(n => <NewsMain new={n} key={n.id}/>)}
                    </Carousel>
                </div>
                <div>
                    <button className={s.buttonNews}>
                        <NavLink to='/news'>Смотреть все новости</NavLink>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.mainPage.news,
        textBook: state.mainPage.textBook
    }
}

export default connect(mapStateToProps, {})(Main);