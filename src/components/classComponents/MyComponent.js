import React from 'react';
import { Button } from 'react-bootstrap';

import './MyComponent.css'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      status: false,
      form: '',
    };
  }

  componentDidMount () {
    alert('web pertama dibuka')
  }

  onClickMe = () => {
    this.setState({status: !this.state.status})
  }

  onChangeInput = (event) => {
    console.log(event.target.value)
    this.setState({form: event.target.value})
  }

  render () {
    console.log(this.props)
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            Column
          </div>
          {
            this.state.status && 
              <div class="col">
                Column ke 2
              </div>
          }
        </div>
        
        <Button variant="secondary" onClick={this.onClickMe}>Togle</Button>
        <br />
        <br />
        <input type='text' onChange={this.onChangeInput} value={this.state.form} />
      </div>
      // <div>
      //   <p style={{
      //     color: 'red',
      //     fontSize: '1rem'
      //   }}>ini state count {this.state.count}</p>
      //   <button onClick={this.onClickMe}>Click Me</button>
      // </div>
    )
  }
}

export default MyComponent