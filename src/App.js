import React, { Component } from 'react'
import CardList from './components/CardList'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters: [],
       searchField:''
    }
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(response=>this.setState({monsters:response}))
    }
  render() {
    const{monsters,searchField}=this.state
    const filteredMonsters= monsters.filter(m=>m.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="container-fluid d-flex flex-column justify-content-center">
        <input
        type='search'
        className='my-3 mx-auto rounded'
        onChange={e=>this.setState({searchField: e.target.value})}
        placeholder='search monster name'
        />
       <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App

