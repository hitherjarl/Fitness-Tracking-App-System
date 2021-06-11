import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import React, { Component, useState, useEffect } from 'react'

const initialState = {
  isLoading: true,
  users: []
}
const App = () => {


  const [data, setData] = useState(initialState)

  const getData = async () => {
    const response = await fetch('/all');
    const responses = await fetch('/getProtein');
    const responseCarb = await fetch('/getCarbs');
    const responseFat = await fetch('/getFat');
    const body = await response.json();
    const bodies = await responses.json();
    const bodyCarb = await responseCarb.json();
    const bodiesFat = await responseFat.json();
    /*console.log(response);*/
    console.log(bodies);
    console.log(body);
    setData({ users: body, totalProtein: bodies, totalCarb: bodyCarb, totalFat: bodiesFat, isLoading: false })
    /*setData({ totalProtein: bodies, isLoading: false})*/
  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      <Main />
    </div>
  )
}
export default App;