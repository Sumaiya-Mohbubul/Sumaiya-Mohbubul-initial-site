import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import ParticlesBackground from "../components/Particles";
import Image from 'react-bootstrap/Image'

import './Home.css';
import { Row, Col, Container as Layout} from "react-bootstrap";

function Home() {

    return (
        <div>
            <ParticlesBackground />
            <div className="card">
                <Layout>
                <h1> Sumaiya Mohbubul</h1>
                <h6> Software Engineer | Student</h6>
                    <Row>
                        <Col sm={4}>
                            What I do
                        </Col>
                        <Col sm={8}>
                            <Image> 
                                
                            </Image>
                            </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                        <h5>
                            I am a software engineer at Morgan Stanley who is studying Computer Science at King's College London.
                        </h5>
                        </Col>
                        <Col sm={8}>sm=4</Col>
                    </Row>
                </Layout>
            </div>
        </div>
        
    )
};

export default Home;
