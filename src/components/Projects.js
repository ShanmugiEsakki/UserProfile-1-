import { Container, Row, Col, Tab, Nav,TabContainer,TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projectbg from "../assets/img/project-bg2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { MarkAsUnreadTwoTone } from "@mui/icons-material";

export const Projects=()=>{
    //Array creation
    const projects =[
        {
            title: "Portfolio",
            description: "personalized experience",
            imgUrl: projImg1,
        },
        {
            title: "MoviesNow",
            description: "digital movie maker",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design and development",
            imgUrl: projImg3,
        },
        {
            title: "Fakefilx",
            description: "experience the core",
            imgUrl: projImg4,
        },
        {
            title: "Web Development",
            description: "John Doe",
            imgUrl: projImg5,
        },
        {
            title: "Template Tiles",
            description: "choose your desire",
            imgUrl: projImg6,
        },
    ];
    return(
            <section className="project" id="project">
            <Container>
            <Row>
            <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center' }}>Projects</h2><br/>
            <p>I have successfully undertaken various projects that demonstrate my technical prowess, problem-solving skills, and ability to deliver tangible results. These projects showcase my proficiency in Web 
            Technology and provide practical insights into my capabilities. Here are some noteworthy projects:</p>
            <br/>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
           
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="third" >Tab 3</Nav.Link>
            </Nav.Item>
            </Nav>
            <br/>

            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
          <Tab.Pane eventKey="first">
          <Row>
          {
            projects.map((project,index)=>{
                return (
                    <ProjectCard key={index}
                    {...project} />
                )
            })
          }
          </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
          <h2 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center' }}>COURSES</h2><br/>
          <h4 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'left' }}>Programming Skills:</h4>
          <p style={{textAlign: 'left'}}>Started as a beginner in programming language and completed a full-course in c++
          and java.<br/>
          Developed interest in problem-solving and aptitude skills</p>

          <h4 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'left' }}>Data Structure and Algorithms:</h4>
          <p style={{textAlign: 'left'}}>Proficient in Data Structures and Algorithms, with a strong foundation in
          fundamental concepts such as arrays, linked lists, stacks, and queues.
          Well-versed in advanced data structures including trees, graphs, hash tables, and
          heaps.<br/> Adept at applying algorithmic techniques such as recursion, divide and
          conquer, dynamic programming, a
          nd greedy algorithms to solve real-world
          problems.</p>

          <h4 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'left' }}>Core-Design and Analysis Algorithm:</h4>
          <p style={{textAlign: 'left'}}>Skilled in Design and Analysis of Algorithms, with a focus on developing efficient
          and scalable solutions. Proficient in designing algorithms for various problem
          domains, emphasizing optimization and performance.<br/>
          Adept at leveraging algorithmic techniques, such as dynamic programming and
          heuristic optimization, to enhance problem-solving capabilities.</p>

          <h4 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'left' }}>Web Technology:</h4>
          <p style={{textAlign: 'left'}}>Proficient in Web Technology, with expertise in designing and developing scalable
          web solutions. Skilled in front-end technologies, including HTML, CSS, and
          JavaScript, to create interactive and user-friendly interfaces.<br/>
          Experienced in utilizing modern front-end frameworks such as React.js to build
          dynamic web applications</p>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
          <h2 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center' }}>CERTIFICATIONS</h2><br/>
          <p style={{textAlign: 'center'}}>I have pursued and obtained certifications that complement my skills and contribute to my professional development. These certifications validate my expertise in both technical and non-technical centres and signify my commitment to staying updated with industry standards. Here are some of the certifications I have earned:<br/><br/>
          <b>AWS Academy<br/>
Google<br/> 
MongoDB<br/>
UiPath Academic Alliance<br/>
Microsoft Features<br/>
Mathlab<br/>
Coursera<br/>
Unstop</b></p>
          </Tab.Pane>
          </Tab.Content>
         </Tab.Container>
          </div>}
          </TrackVisibility>
          </Col>
          </Row>
            </Container>
            <img className="background-image-right" src={projectbg}></img>
            </section> 
    )
}