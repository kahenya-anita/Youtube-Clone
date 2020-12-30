import React from 'react';
import './VideoCard.css';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';


function VideoCard({image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className="video__info">
                <AccountCircleSharpIcon
                className="videoCard__avatar"
                alt={channel} 
                src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
