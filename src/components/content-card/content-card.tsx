import React from "react";
import './content-card.scss'

interface IProps {
    title: string;
    lang: string;
    desc: string | null;
}

export const ContentCard: React.FC<IProps> = ({title, lang, desc}) => {
    return (
        <div className='card'>
            <h2 className='card-title'>{title}</h2>
            <div className='card-wrapper'>
                <p className='card-subtitle'>Language: </p>
                <p className='card-subtitle'>{lang}</p>
            </div>
            <div className='card-wrapper'>
                <p className='card-subtitle'>Description: </p>
                <p className='card-subtitle'>{desc ? desc : 'No description'}</p>
            </div>
        </div>
    )
}