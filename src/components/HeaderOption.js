import React from 'react'
import './HeaderOption.css'
import Avatar from '@material-ui/core/Avatar';
function HeaderOption({avatar,Icon,title,onClick}) {

    return (
        <div className="headerOption">
            {
             Icon && (
                 <Icon className="headerOption__icon" />
             ) 
            }
            {
            avatar && (
                <Avatar onClick={onClick} src={avatar} className="headerOption__icon" /> 
            )
            }
            <h3 className="headerOption__title">{title}</h3> 
        </div>
    )
}

export default HeaderOption
