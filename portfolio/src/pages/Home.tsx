import ParticlesBackground from "../components/Particles";
import Image from 'react-bootstrap/Image'

import './Home.css';
import { Row, Col, Container as Layout, Card} from "react-bootstrap";

function Home() {

    return (
        <div>
            <ParticlesBackground />
            <Card>
                <Layout className="card-content">
                <h1> Sumaiya Mohbubul</h1>
                <h6> Software Engineer | Student</h6>
                    <Row className="card-row">
                        <Col sm={4} className="card-col">
                            What I do
                        </Col>

                        <Col sm={8} className="card-col">
                            </Col>
                    </Row>
                    <Row className="card-row">
                        <Col sm={4}>
                        <h5>
                            Software engineer at Morgan Stanley who is studying Computer Science at King's College London.
                        </h5>
                        </Col>
                        <Col sm={8}>
                        <Image id="profilePic" src = {require('../photos/proShot.jpg')} /> 
                        </Col>
                    </Row>
                </Layout>
            </Card>
        </div>
        
    )
};

export default Home;
