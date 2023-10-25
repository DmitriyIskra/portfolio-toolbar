import './css/toolbarItem.css';

export default function ToolbarItem(props) {
    const {item} = props;

    return (
        <li
        className={ item.category === item.selected ? 'toolbarItem toolbar-active' : 'toolbarItem'}
        id={item.category}
        key={item.index}> {item.category} </li>
    )
}
