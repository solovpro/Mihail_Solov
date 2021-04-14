import React from 'react';
import s from "./News.module.css";
import {connect} from 'react-redux';
import News from "./News";

class NewsContainer extends React.Component {

    render() {
        return (
            <div className={s.news}>
                <div className={s.maneText}>
                    Новости
                    <hr className={s.hr}/>
                </div>
                {this.props.news.map(n => <News new={n} key={n.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default connect(mapStateToProps, {})(NewsContainer);