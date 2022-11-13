import ParticlesBackground from "../components/Particles";
import './Home.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function Home(this: any) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div>
            <ParticlesBackground />
            <div className="container flex-box">
                <div className="card-horizontal">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Sumaiya Mohbubul </h1>
                            <h6>Software Engineer | Student</h6>
                        </div>
                        <div className="card-body">
                            <h3>About Me</h3>
                            <p>Software engineer at Morgan Stanley who is studying 
                                Computer Science at King's College London.</p>
                            <p>I love learning about different fields within the technology
                                realm whilst gaining practical experience in them. 
                                So far, I've experienced full-stack, database, big data, and cloud development.
                                Next up, data science and security deveopment!</p>
                        </div>
                    </div>
                    <img id="profilePic" src = {require('../photos/proShot.jpg')} alt="profilePic"/>
                </div>

                <div className="card">
                    <div className="card-content">
                        <div className="card-title">
                            <h1>Projects </h1>
                            <h6>Here are some projects I really enjoyed!</h6>
                        </div>
                        <Carousel className="carousel"
                            additionalTransfrom={0}
                            responsive={responsive}
                            arrows={false}
                            autoPlaySpeed={3000}
                            centerMode={false}
                            draggable
                            focusOnSelect={false}
                            showDots
                            infinite
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            >
                            <div> {/* card 1*/}
                                <div className="card" id="carousel-cards">
                                    <div className="card-title">
                                        <h1>London AirBnB simulation</h1>
                                        <h6>An AirBnB like GUI for London.</h6>
                                    </div>
                                </div>
                            </div>
                            <div> {/* card 2*/}
                                <div className="card" id="carousel-cards">
                                    <div className="card-title">
                                        <h1>Muzeiq </h1>
                                        <h6>A Netflix for songs.</h6>
                                    </div>
                                </div>
                            </div>
                            <div> {/* card 3*/}
                                <div className="card" id="carousel-cards">
                                    <div className="card-title">
                                        <h1>AI Chat Bot </h1>
                                        <h6>A bot that recognises questions in group chats and answers them.</h6>
                                    </div>
                                </div>
                            </div>
                            <div> {/* card 4*/}
                                <div className="card" id="carousel-cards">
                                    <div className="card-title">
                                        <h1>Projects </h1>
                                        <h6>Here are some projects I really enjoyed!</h6>
                                    </div>
                                </div>
                            </div>
                            </Carousel>
                            <p>Head to the <Link to={"/home"}>projects</Link> tab to view the rest.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Home;
