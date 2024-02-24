import React from 'react'
import './SidebarPage.scss'
import github from '../assets/images/githubtransparent.png'
import instagram from '../assets/images/instatransparent.png'
import linkedin from '../assets/images/linkedintransparent.png'
import twitter from '../assets/images/twittertransparent.png'

function SidebarPage() {
  return (


<div className='outterLinks-div'>

<div className='links'>
<a className='linkgithub' href='https://github.com/Anburrr'>
<img className='githubbutton' src={github}/>
</a>
<a className='linklinkedin' href='https://www.linkedin.com/in/arsh-bakhshi-558a792a0/'>
<img className='linkedinbutton' src={linkedin}/>
</a>
<a className='linkinstagram' href='https://www.instagram.com/arsh.bakh/'>
<img className='instagrambutton' src={instagram}/>
</a>
<a className='linktwitter' href='https://twitter.com/Anba786'>
<img className='twitterbutton' src={twitter}/>
</a>
</div>
    </div>
  )
}

export default SidebarPage