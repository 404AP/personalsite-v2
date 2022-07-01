import React from 'react';
import './Projects.css';





function Projects(props) {
    const items = props.items;

    
   
    const listItems = items.map( item => {
        var image = {backgroundImage: 'url(' + item.thumbnail + ')'};
        return <div 
        onClick={(e) => {
            e.preventDefault();
            props.settingCurrentItem(item.key)}} 
        key={item.key} 
        className={'project-icon-container'} 
        id={'project-icon-container'+ item.key}>
            <div style={image} className={'project-icon' + item.key + " icons"}>

            </div>
            <h5>{item.title}</h5>
        </div>
    });

    return (
        listItems
      );
}

export default Projects;