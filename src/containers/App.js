import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './Robots' // Since we haven't used "default" we have to destructure the import using { }
import './App.css';

// STATE gives PROPS
// Parent provdes state and the child receives it as props

// "App" is a smart component since it uses states. Components using states are created as a Class
// "SearchBox", etc are pure components as they have only props and functions
class App extends Component {

    constructor() {
        super();
        this.state = {  // States change the app
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json()
        })
        .then(users => {
            this.setState({robots:users});
        })

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const {robots,searchfield} = this.state;  // Restructuring
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
        <h1>Loading..</h1> :
        (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>

        );
    }
}

export default App;