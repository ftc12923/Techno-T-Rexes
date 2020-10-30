import React from 'react'; 
import './TrexesHomeHeader.css'; 

function TrexesHomeHeader() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    function homeClick() {
        window.location.href = '/'; 
    }
    return (
        <div className="trexeshomeheader">
            <div className="trexeshomeheader__titleheader">
                <h1 className="trexeshomeheadertitleheader">Techno-T-Rexes</h1>
            </div>
            <div className="trexeshomeheader__homebuttona">
                <a className="homebuttona" href='/'>Home</a>
            </div>
            <div className="trexeshomeheader__achievementsbuttona">
                <a className="achievementsbuttona" href='/achievements'>Achievements</a>
            </div>
            <div className="trexeshomeheader__outreachbuttona">
                <a className="outreachbuttona" href='/outreach'>Outreach</a>
            </div> 
            <div className="trexeshomeheader__instagramicona">
                <img className="instagramicona" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" onClick={() => {openInNewTab('https://www.instagram.com/technotrexes/')}}/>
            </div>
            <div className="trexeshomeheader__twittericona">
                <img className="twittericona" src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png" onClick={() => {openInNewTab('https://twitter.com/ftc12923')}}/>
            </div>
            <div className="trexeshomeheader__ftconetwoninetwothreehearda">
                <a className="ftconetwoninetwothreehearda" onClick={() => {openInNewTab('https://theorangealliance.org/teams/12923')}}>12923</a>
            </div>

        </div>
    ); 
}

export default TrexesHomeHeader; 