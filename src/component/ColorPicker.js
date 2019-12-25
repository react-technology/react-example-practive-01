import React, { Component } from 'react'

export default class ColorPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: ['red', 'green', 'blue', 'yellow']
        }
    }

    showColor(color) {
        return {
            backgroundColor: color
        };
    }

    onSetActiveColor(color) {
        this.props.onReceiveColor(color);
    }

    render() {
        var elmColors = this.state.color.map((color, index) => {
            return <span
                key={index}
                style={this.showColor(color)}
                class={this.props.color === color ? 'active' : ''}
                onClick={() => this.onSetActiveColor(color)}
            >

            </span>
        });

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmColors}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}