import React, { Component } from 'react'

export default class Reset extends Component {

    onResetDefault = () => {
        this.props.onSettingDefault(true);
    }

    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
        );
    }
}