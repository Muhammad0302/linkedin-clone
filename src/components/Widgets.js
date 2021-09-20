import React from 'react'
import './widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
const newsArticle = (heading,subtitle) =>(
   <div className="widgetAarticle">
       <div className="widgetsArticle__left">
         <FiberManualRecordIcon />
       </div>
       <div className="widgetsArticle__right">
           <h4>{heading}</h4>
           <h5>{subtitle}</h5>
       </div>
   </div>
)
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin news</h2>
                <InfoIcon />
            </div>
            {newsArticle("Papa react is back here","Bitcoin currency exchanger")}
            {newsArticle("Most trending jobs in the market","Here you need to put our works")}
            {newsArticle("Current era","game of changer for youngster")}
            {newsArticle("Idea creation in enviroment","Innovative idea for youngster")}
            {newsArticle("Web developer stuffs","amazing stuffs to become a web developer")}
            {newsArticle("Most trending jobs in the market","Here you need to put our works")}
          
        </div>
    )
}

export default Widgets
