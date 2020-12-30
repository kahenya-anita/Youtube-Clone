import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
            <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
            <SidebarRow  Icon={SubscriptionsSharpIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrarySharpIcon} title="Library" />
            <SidebarRow Icon={HistorySharpIcon} title="History" />
            <SidebarRow Icon={OndemandVideoSharpIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltSharpIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreSharpIcon} title="Show More" />
            <hr />
        </div>
    )
}

export default Sidebar
