import React, { Component } from 'react';
import Header from "../../../../components/Header"
import Nav from "../../../../components/docs/0.9.0/Nav"
import Box from "../../../../components/docs/0.9.0/Tags/Box"
import Camera from "../../../../components/docs/0.9.0/Tags/Camera"
import Circle from "../../../../components/docs/0.9.0/Tags/Circle"
import Cone from "../../../../components/docs/0.9.0/Tags/Cone"
import Cursor from "../../../../components/docs/0.9.0/Tags/Cursor"
import Curvedimage from '../../../../components/docs/0.9.0/Tags/Curvedimage';
import Cylinder from '../../../../components/docs/0.9.0/Tags/Cylinder';
import Dodecahedron from '../../../../components/docs/0.9.0/Tags/Dodecahedron';
import Gltf_model from '../../../../components/docs/0.9.0/Tags/Gltf_model';
import Icosahedron from '../../../../components/docs/0.9.0/Tags/Icosahedron';
import Image from "../../../../components/docs/0.9.0/Tags/Image"
import Light from '../../../../components/docs/0.9.0/Tags/Light';
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
                        <Curvedimage></Curvedimage>
                        <Cylinder></Cylinder>
                        <Dodecahedron></Dodecahedron>
                        <Gltf_model></Gltf_model>
                        <Icosahedron></Icosahedron>
                        <Image></Image>
                        <Light></Light>
                    </div>
                </div>
            </div >
        );
    }
}

export default index;