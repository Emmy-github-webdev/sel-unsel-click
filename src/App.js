import React, {useState, Fragment} from 'react';
import './App.css';

const List = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  
  const handleChange = (e) => {
    e.preventDefault();
    console.log('Target', e.target.tag)
    setIsActive(!isActive)
  }
  return (
  <Fragment>
      <ul className="List">
        {items.map(item => (
          <li key={item.name} onClick={ handleChange} className={` ${(isActive === true) ? 'List__item tk': `List__item List__item--${item.color}`}`}>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>)
  };


export default List;
