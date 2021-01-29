import React from "react";
import './sidebar.scss'

interface IProps {
    history: string[];
    search: string;
    setSearch: (value: string) => void;
}

export const Sidebar: React.FC<IProps> = ({history, search, setSearch}) => {
    return (
        <div className='sidebar'>
            <input
                className='sidebar-input'
                value={search}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className='sidebar-history'>
                <h4 className='sidebar-history-title'>Search history :</h4>
                <ul className='sidebar-history-list'>
                    {history && history.length ? history.map((item, index) => <li key={item + index}>{item}</li>) : null}
                </ul>
            </div>
        </div>
    )
}