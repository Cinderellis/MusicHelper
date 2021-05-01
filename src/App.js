import './App.css';
import { getListOfNotes, getCircleOfFifths, getKeysByRoot } from './logic'
import React, { useState } from 'react'
import { Container, Col, Row, Table } from 'react-bootstrap'
import Sidebar from './Components/SideBar'



function App() {
  const [note, setNote] = useState('')
  const [major, setMajor] = useState([])
  const [minor, setMinor] = useState([])
  const [showSharps, setShowSharps] = useState(false)

  const HandleClick = (note) => {
    setNote(note)
    setMajor(getKeysByRoot(note, showSharps).major)
    setMinor(getKeysByRoot(note, showSharps).minor)
  }

  const HandleChange = (event) => {
    setShowSharps(event.target.checked)
    setMajor(getKeysByRoot(note, event.target.checked).major)
    setMinor(getKeysByRoot(note, event.target.checked).minor)

  }

  const CreateTable = ({ onHandleChange }) => {
    return (
      <div className='mt-3'>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th><input className='mr-2' type='checkbox' onChange={onHandleChange} checked={showSharps} />{showSharps ? 'Sharps' : 'Flats'}</th>
            <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Major</td>{major.map((degree, index) => { return (<td key={index}>{degree}</td>) })}</tr>
          <tr><td>Minor</td>{minor.map((degree, index) => { return (<td key={index}>{degree}</td>) })}</tr>
        </tbody>
      </Table>
      </div>
    )
  }

  return (
    <Container fluid className="App">
      <Row>
        <Col xs={2}><Sidebar handleClick={HandleClick} /></Col>
        <Col className='bg-secondary' xs={10}><CreateTable onHandleChange={HandleChange} /></Col>
      </Row>
    </Container >
  );
}

export default App;
