import React from "react";
import './content-card.scss'

interface IProps {
    name: string;
    language: string;
    description: string | null;
}

export const ContentCard: React.FC<IProps> = ({name, language, description}) => {
    return (
        <div className='card'>
            <h2 className='card-title'>{name}</h2>
            <div className='card-wrapper'>
                <p className='card-subtitle'>Language: </p>
                <p className='card-subtitle'>{language}</p>
            </div>
            <div className='card-wrapper'>
                <p className='card-subtitle'>Description: </p>
                <p className='card-subtitle'>{description ? description : 'No description'}</p>
            </div>
        </div>
    )
}