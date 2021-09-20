import React from 'react'
import './Post.css'
import InputOption from './InputOption'
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
function Post({name,description,message,photoURL}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar /> 
            <div className="post__info">
                    <h2>Muhammad Ismail</h2>
                    <p>Description</p>
            </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            {/* postOption */}
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="grey" />
            </div>
        </div>
    )
}

export default Post
