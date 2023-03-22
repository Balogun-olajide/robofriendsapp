import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Robots from '../robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename="/robofriendsapp">
      {/* rest of your app code */}
    </Router>
  );
}


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});   
}

     onSearchChange = (event) => {
         this.setState({ searchfield: event.target.value })
     }

     render() {
        const { robots, searchfield } = this.state; 
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );

        return !robots.length ?
        <h1>Loading</h1> :
        ( 
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox SearchChange={this.onSearchChange} />
                    <Scroll>  
                     <ErrorBoundry>
                        <Cardlist robots={filteredRobots} />
                     </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }    
}
  
export default App; 