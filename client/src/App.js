import React, { Component } from 'react';
import './App.css';
import subscribeToDataSender from './api';
import BarChart from "./BarChart";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [12, 5, 6, 6, 9, 10],
    }

    subscribeToDataSender((err, dataSended) => this.setState({
      data: dataSended
    }));

  }

  render() {
    return (
      <div className="App">
        <h3 style={{ color: "#21219c" }}>Example-socket-react-d3</h3>
        <BarChart data={this.state.data} size={[300, 250]} />
      </div>
    );
  }
}

export default App;
