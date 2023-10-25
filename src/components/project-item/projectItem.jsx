import React from 'react'
import './css/projectItem.css'


export default function ProjectItem(props) {
    const { obj } = props;

    return (
        <li className={`project-item project-item_${obj.item.category}`} data-num={obj.index} key={obj.index}>
            <img src={obj.item.img} alt={obj.item.category} />
        </li>
    )
}
