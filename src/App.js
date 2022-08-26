import React, {useState, Fragment} from 'react';
import './App.css';

const List = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  
  const handleChange = () => {
    setIsActive(!isActive)
  }
  return (
  <Fragment>
      <ul className="List">
        {items.map((item, index) => (
          <li key={index} onClick={ handleChange} className={` ${(isActive === true) ? 'List__item tk': `List__item List__item--${item.color}`}`}>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>)
  };


export default List;
