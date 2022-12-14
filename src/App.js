import React, {useState, Fragment} from 'react';
import './App.css';

const List = (props) => {
  const items = props.items
  const [isActive, setIsActive] = useState(false);
  
  const handleChange = (e) => {
    const index = (e.target.index);
    console.log(index)
    setIsActive(!isActive)
  }

  return (
  <Fragment>
      <ul className="List">
        {items.map(item => (
          <li key={item.name} onClick={(e) => handleChange(e)} className={` List__item ${(isActive === true) ? 'tk': `List__item--${item.color}`}`}>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>)
  };


export default List;
