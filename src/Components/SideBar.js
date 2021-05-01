import React from "react";
import { Nav } from "react-bootstrap";
import { getListOfNotes } from "../logic";
import './Sidebar.css'

const Sidebar = ({ handleClick = (i) => alert(i) }) => {
    const notes = getListOfNotes();
    return (
        <Nav className="col-md-12 d-none d-md-block sidebar" >
            <div className="sidebar-sticky">
                {notes.map((note, index) => {
                    return (
                        <Nav.Item onClick={() => handleClick(note)} key={index}>
                            <a href='#' className='nav-link text-light'>{note}</a>
                        </Nav.Item>)
                })}
            </div>
        </Nav>
    );
};
export default Sidebar