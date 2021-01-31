import React from "react";
import './content-block.scss'
import {ContentCard} from "../content-card/content-card";

interface IProps {
    data: {
        name: string;
        language: string;
        description: string | null;
    }[] | null
}

export const ContentBlock: React.FC<IProps> = ({data}) => {
    return (
        <div className='content-wrapper'>
            {data && data.map((item, index) => <ContentCard key={index + item.name} {...item}/>)}
        </div>
    )
}