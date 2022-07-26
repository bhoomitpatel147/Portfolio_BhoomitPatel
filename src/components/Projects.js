import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Angular, More, ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FoodBlog Project",
      description: "Design & Development",
      imgUrl: projImg1,
      link: 'https://apatel2.scweb.ca/foodblog/'
    },
    {
      title: "TestApp Project",
      description: "Testing & Development",
      imgUrl: projImg1,
      link: 'https://bpatel.scweb.ca/testapp/'
    },



  ];
  const angular = [
    {
      title: "Angular Project",
      description: "Angular Based web Api",
      imgUrl: projImg2,
      link: 'https://stackblitz.com/github/bhoomitpatel147/Bhoomit_Patel_WEB601Assignments/tree/Assignment8/B_Patel_RockstarGames?file=README.md'
    },

  ];
  const more = [
    {
      title: "Heroku Ruby Project",
      description: "Ruby on Rails PaaS Project",
      imgUrl: projImg3,
      link: 'https://bhoomitpassproject.herokuapp.com/'
    },
    {
      title: "Bootstrap",
      description: "First bootstrap simple website",
      imgUrl: projImg4,
      link: 'https://bpatel.scweb.ca/0780326-Patel-Assignment7/'
    },
    {
      title: "Simple basic Web",
      description: "Made by html, css and javascript",
      imgUrl: projImg5,
      link: 'https://bpatel.scweb.ca/0780326-Patel-Assignment5/'
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>There are some projects which I built during my education. Like Angular, Laravel, Heroku Pass Deployment Project based on Ruby on Rails, Bootstrap 5 and basic HTML and CSS etc...</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Angular</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Laravel</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">More</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            angular.map((project, index) => {
                              return (
                                <Angular
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            more.map((project, index) => {
                              return (
                                <More
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
