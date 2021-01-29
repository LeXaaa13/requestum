import React from "react";
import './content-block.scss'
import {ContentCard} from "../content-card/content-card";

interface IProps {
    data: {
        title: string;
        lang: string;
        desc: string | null;
    }[] | null
}

export const ContentBlock: React.FC<IProps> = ({data}) => {
    return (
        <div className='content-wrapper'>
            {data && data.map((item, index) => <ContentCard key={index + item.title} {...item}/>)}
        </div>
    )
}