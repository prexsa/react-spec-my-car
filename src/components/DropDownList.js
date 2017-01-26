import React from 'react';

const DropDownList = () => {
  return (
    <div className="w3-dropdown-hover">
      <button className="w3-btn w3-red">Hover Over Me!</button>
      <div className="w3-dropdown-content w3-border">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default DropDownList;
