import React from 'react';
import './ChannelRow.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import  VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow(image, channel, subs, noOfVideos, description, verified) {
    return (
        <div className="channelRow">
           <AccountCircleIcon
            className="channelRow__logo"
            alt={channel}
            src={image} 
            /> 
            <div className="channelRow__text">
    <h4>{channel} {verified && <VerifiedIcon/>}</h4>
    <p>
        {subs} subscribers . {noOfVideos} videos
    </p>
    <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;
