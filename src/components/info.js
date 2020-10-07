import React from 'react'


export default function Info(props) {
    const { copyright, date, explanation } = props

    return (
        <div className="infoSection">
            <ul>
                <li className='date'>{date}</li>
                <li className='copyright'>{copyright}</li>
                <li><p>{explanation}</p></li>
            </ul>
        </div>
    );


}