import React from 'react';
import './Projects.css';





function Projects(props) {
    const items = props.items;
    let currentItem = props.currentItem.key;
    
   
    const listItems = items.map( item => {
        let image = {backgroundImage: 'url(' + item.thumbnail + ')'};
        let selected =  currentItem == item.key ? "selected" : '' ;
        return (<div 
                    onClick={(e) => {
                        e.preventDefault();
                        props.settingCurrentItem(item.key)}} 
                    key={item.key} 
                    className={'project-icon-container '+ selected} 
                    id={'project-icon-container'+ item.key}>
                        <div style={image} className={'project-icon' + item.key + " icons"}>

                        </div>
                        <div className='project-title-overlay'></div>

                        <h5 className='project-title'>{item.title}</h5>
                         
                        
                        
                </div>)
            });

    return (
        listItems
      );
}

export default Projects;