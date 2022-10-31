import React from 'react'
import {ImLinkedin,ImGithub,ImDribbble} from 'react-icons/im'


const HeaderSocials = () => {
  return (
    <div>
        <div className="header__socials">
            <a href='https://linkedin.com' target="blank"> < ImLinkedin /></a>
            <a href='https://github.com' target="blank"><ImGithub/></a>
            <a href='https://dribble.com' target="blank"><ImDribbble/></a>
        </div>
    </div>
  )
}

export default HeaderSocials;