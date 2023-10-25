import ToolbarItem from '../toolbar-item/toolbarItem';
import './css/toolbar.css';

export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;

    return (
        <ul className="toolbarList" onClick = { e => {
                onSelectFilter(e.target.id);
            }}>
            {filters.map( (category, i) => {
                return (
                    <ToolbarItem item = {{selected, category, index: i}} />
                )
            })}
        </ul>
    )
}
