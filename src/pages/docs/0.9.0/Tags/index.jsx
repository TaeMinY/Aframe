import React, { Component } from 'react';
import Header from "../../../../components/Header"
import Nav from "../../../../components/docs/0.9.0/Nav"

class index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div style={{ display: "flex" }}>
                    <Nav></Nav>
                    <div>d</div>
                </div>
            </div>
        );
    }
}

export default index;