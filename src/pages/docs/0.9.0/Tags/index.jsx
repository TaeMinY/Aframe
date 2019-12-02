import React, { Component } from 'react';
import Header from "../../../../components/Header"
import Nav from "../../../../components/docs/0.9.0/Nav"
import Box from "../../../../components/docs/0.9.0/Tags/Box"
import Camera from "../../../../components/docs/0.9.0/Tags/Camera"
import Circle from "../../../../components/docs/0.9.0/Tags/Circle"
import Cone from "../../../../components/docs/0.9.0/Tags/Cone"
import Cursor from "../../../../components/docs/0.9.0/Tags/Cursor"
class index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div style={{ display: "flex" }}>
                    <Nav></Nav>
                    <div>
                        <Box></Box>
                        <Camera></Camera>
                        <Circle></Circle>
                        <Cone></Cone>
                        <Cursor></Cursor>
                    </div>
                </div>
            </div >
        );
    }
}

export default index;