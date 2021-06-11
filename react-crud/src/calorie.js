import React, { Component} from 'react'
import Row  from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col  from 'react-bootstrap/Col'



const UserList = (props) => {
    const { user } = props
    console.log(user)
    

        return(
        <Container>
        
            <Row>
            <Col xs={6}>{user.name}</Col>
            <Col>{user.protein}  </Col>
            <Col>{user.carbs}</Col>
            <Col>{user.fat}</Col>
            </Row> 
        
        </Container>
        );
    
}
export default UserList;