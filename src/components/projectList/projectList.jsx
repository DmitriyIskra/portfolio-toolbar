import './css/projectList.css';
import ProjectItem from '../project-item/projectItem';

export default function ProjectList(props) {
    const { item } = props;

    return (
        <ul className="project-list">
            {item.map( (item, i) => {
                return (
                    <ProjectItem obj = {{item, index: i}}/>
                )   
            })}
        </ul>
    )
}
