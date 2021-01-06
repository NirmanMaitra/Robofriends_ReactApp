import React, { Component } from 'react';
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
import ErrorBoundry from './ErrorBoundry'
import './App.css'
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state =
        {
            robot: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robos => { this.setState({ robot: robos }) });
    }
    onSearchchange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const filtered = this.state.robot.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robot.length === 0) {
            return <h1 className="tc">Loading </h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchchange} />
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filtered} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;