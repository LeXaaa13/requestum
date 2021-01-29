import React from "react";
import './header.scss'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <h1 className='company-name'>requestum</h1>
                <h4 className='company-description'>web development company</h4>
            </div>
            <div className='header-right'>
                <h4 className='project-name'>Github users search app</h4>
            </div>
        </div>
    )
}