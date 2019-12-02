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
import Link from '../../../../components/docs/0.9.0/Tags/Link';
import Obj_model from '../../../../components/docs/0.9.0/Tags/Obj_model.jsx';
import Octahedron from '../../../../components/docs/0.9.0/Tags/Octahedron';
import Plane from '../../../../components/docs/0.9.0/Tags/Plane';
import Ring from '../../../../components/docs/0.9.0/Tags/Ring';
import Sky from '../../../../components/docs/0.9.0/Tags/Sky';
import Sound from '../../../../components/docs/0.9.0/Tags/Sound';
import Sphere from '../../../../components/docs/0.9.0/Tags/Sphere';
import Tetrahedron from '../../../../components/docs/0.9.0/Tags/Tetrahedron';
import Text from "../../../../components/docs/0.9.0/Tags/Text";
import Torus_knot from '../../../../components/docs/0.9.0/Tags/Torus_knot';
import Torus from '../../../../components/docs/0.9.0/Tags/Torus';
import Triangle from '../../../../components/docs/0.9.0/Tags/Triangle';
import Video from '../../../../components/docs/0.9.0/Tags/Video';
import Videosphere from '../../../../components/docs/0.9.0/Tags/Videosphere';
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
                        <Circle id="<a-circle>"></Circle>
                        <Cone id="<a-cone>" ></Cone>
                        <Cursor id="<a-cursor>"></Cursor>
                        <Curvedimage id="<a-curvedimage>"></Curvedimage>
                        <Cylinder id="<a-cylinder>"></Cylinder>
                        <Dodecahedron id="<a-dodecahedron>"></Dodecahedron>
                        <Gltf_model id="<a-gltf_model>"></Gltf_model>
                        <Icosahedron id="<a-icosahedron>"></Icosahedron>
                        <Image id="<a-image>"></Image>
                        <Light id="<a-light>"></Light>
                        <Link id="<a-link>"></Link>
                        <Obj_model id="<a-obj_model>"></Obj_model>
                        <Octahedron id="<a-octahedron>"></Octahedron>
                        <Plane id="<a-plane>"></Plane>
                        <Ring id="<a-ring>"></Ring>
                        <Sky id="<a-sky>"></Sky>
                        <Sound id="<a-sound>"></Sound>
                        <Sphere id="<a-sphere>"></Sphere>
                        <Tetrahedron id="<a-tetrahedron>"></Tetrahedron>
                        <Text id="<a-text>"></Text>
                        <Torus_knot id="<a-torus_knot>"></Torus_knot>
                        <Torus id="<a-torus>"></Torus>
                        <Triangle id="<a-triangle>"></Triangle>
                        <Video id="<a-video>"></Video>
                        <Videosphere id="<a-videosphere>"></Videosphere>
                    </div>
                </div>
            </div >
        );
    }
}

export default index;