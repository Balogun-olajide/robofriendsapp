import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import { connect } from 'react-redux';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from '../action';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
     }
    }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});   
}


     render() {
        const { robots } = this.state; 
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return !robots.length ?
        <h1>Loading</h1> :
        ( 
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox SearchChange={onSearchChange} />
                    <Scroll>  
                     <ErrorBoundry>
                        <Cardlist robots={filteredRobots} />
                     </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }    
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App); 