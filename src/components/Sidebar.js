import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import { useSelector } from 'react-redux';
import './Sidebar.css'
function Sidebar() {

    const recentItem = (topic) =>(

    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="data:image/jpeg;base64,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" alt="" />
                <Avatar className="sidebar__avatar" style={{textAlign: 'center !important'}} />
                <h2>Muhammad Ismail</h2>
                <h4>MuhammadIsmail@gmail.com</h4>  
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                 <p>Who view you</p>
                 <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                 <p>View on post</p>
                 <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom"> 
                 <p>Recent</p>
                 {recentItem('reactjs')}
                 {recentItem('programming')}
                 {recentItem('softwareengineering')}
                 {recentItem('design')}
                 {recentItem('developer')}
                 {recentItem('requirementengineer')}
            </div>
        </div>
    )
}
export default Sidebar
