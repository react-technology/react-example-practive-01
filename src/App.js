import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import Reset from './component/Reset';
import Result from './component/Result';
import SizeSetting from './component/SizeSetting';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      fontSize: 12
    }
    // this.onSetColor = this.onSetColor.bind(this); // c1
  }

  // c1:
  // onSetColor(params){
  //   console.log(params);
  //   this.setState({
  //     color: params
  //   })
  // }

  onSetColor = (params) => {
    console.log(params)
    this.setState({
      color: params
    })
  }

  onChangeSize = (params) => {
    console.log(params)
    this.setState({
      fontSize: params + this.state.fontSize
    })
  }

  onSettingDefault = (value) => {
    console.log(value)
    if (value) {
      this.setState({
        color: 'red',
        fontSize: 12
      })
    }
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
