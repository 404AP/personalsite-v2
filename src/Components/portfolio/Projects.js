import React from 'react';
import './Projects.css';








function Projects(props) {

    const items = props.items;
    const listItems = items.map( item => {
        return <div key={item.key} className={'project-icon-container'} id={'project-icon-container'+ item.key}>
            <h5>{item.title}</h5>
        </div>
    });

    return (
        listItems
      );
}

export default Projects;