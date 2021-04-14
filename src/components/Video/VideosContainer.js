import React from 'react';
import s from './Videos.module.css';
import Videos from "./Videos";
import {connect} from 'react-redux';

class VideosContainer extends React.Component {

    render() {
        return (
            <div className={s.videos}>
                <div className={s.maneText}>
                    Видео
                    <hr className={s.hr}/>
                </div>
                {this.props.videos.map(v => <Videos video={v} key={v.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.videosPage.videos
    }
}

export default connect(mapStateToProps, {})(VideosContainer);