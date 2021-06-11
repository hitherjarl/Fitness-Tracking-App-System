import logo from './logo.svg';
import './App.css';
import UserList from './calorie';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import React, { Component, useState, useEffect } from 'react'

const initialState = {
  isLoading: true,
  users: []
}
const Dashboard = () => {


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

    <div className="Dashboard">
      <header className="App-header">
        
        <Container>
        
          <div className="App-intro">
          <h2 style={{color: 'white'}}>Food List</h2>
          <hr></hr>
          <Row>
            <Col xs={6}>Food</Col>
            <Col>Protein intake</Col>
            <Col>Carbohydrate intake</Col>
            <Col>Fat intake</Col>
          </Row>
          {data.users.map(user =>        
                 <UserList user={user}/> 
          )}
          <hr></hr>
          
          <Row>
            <Col xs={6}>Total</Col>
            <Col>{data.totalProtein}</Col>
            <Col>{data.totalCarb}</Col>
            <Col>{data.totalFat}</Col>
          </Row>
        </div>
          
      </Container>
        
      </header>
    </div>
  )
}
export default Dashboard;