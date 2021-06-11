import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            protein: '',
            carbs: '',
            fat: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { id, name, protein, carbs, fat } = this.state;

        axios.post('/new', { id, name, protein, carbs, fat }).then((result) => {this.props.history.push("/")});
    }

    render() {
        const { id, name, protein, carbs, fat } = this.state;
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  ADD NUTRITIONAL VALUE
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <label for="isbn">Id:</label>
                    <input type="number" class="form-control" name="id" value={id} onChange={this.onChange} placeholder="Id" />
                  </div>
                  <div class="form-group">
                    <label for="title">Name:</label>
                    <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <label for="author">Protein:</label>
                    <input type="number" class="form-control" name="protein" value={protein} onChange={this.onChange} placeholder="Protein" />
                  </div>
                  <div class="form-group">
                    <label for="published_date">Carbs:</label>
                    <input type="number" class="form-control" name="carbs" value={carbs} onChange={this.onChange} placeholder="Carbs" />
                  </div>
                  <div class="form-group">
                    <label for="publisher">Fat:</label>
                    <input type="number" class="form-control" name="fat" value={fat} onChange={this.onChange} placeholder="Fat" />
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default Create;

