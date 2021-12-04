import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/courselist">
        Course List
      </a>
      <a className="menu-item" href="/addcourse">
        Add Course
      </a>
      <a className="menu-item" href="/celist">
        Course Enquiry List
      </a>
      <a className="menu-item" href="/salescourse">
        Course Sales PipeLine
      </a>
      <a className="menu-item" href="/resourcelist">
        Resource List
      </a>

      <a className="menu-item" href="/addresource">
        Add Resource
      </a>

      

      <a className="menu-item" href="/relist">
        Resource Enquiry List
      </a>
      <a className="menu-item" href="/salesresource">
        Resource Sales PipeLine
      </a>
      
    </Menu>
  );
} 