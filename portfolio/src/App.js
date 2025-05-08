import React, { useState, useEffect } from 'react';
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Example
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import { Navbar, Nav, Container, Row, Col, Button, Form } from 'react-bootstrap';


import { Link } from 'react-scroll';

import { 
  faEnvelope, 
  faHospital, 
  faUsers, 
  faBoxes,
  faDownload,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we should show scroll-to-top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Get all sections
      const sections = document.querySelectorAll('section[id]');
      
      // Get current scroll position
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">
            <div className="navbar-profile">

              <div className="navbar-brand-text">
                <span className="brand-name">MULA MANOJ REDDY</span>

              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="home" smooth={true} duration={500} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about" smooth={true} duration={500} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="skills" smooth={true} duration={500} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="projects" smooth={true} duration={500} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="certifications" smooth={true} duration={500} className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}>Certifications</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" smooth={true} duration={500} offset={-70} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <section id="home" className="section">
        <Container>
          <div className="text-center">
            <h1>HII.....I AM,</h1>
            <h1>MULA MANOJ REDDY</h1>
            <h2>Software Engineer | Java Developer | Frontend Developer</h2>
            <p className="lead">"Passionate Software Engineer seeking opportunities to 
              build innovative and efficient solutions. Dedicated to problem-solving and 
              continuous learning in software development."</p>
          </div>
        </Container>
      </section>

      <section id="about" className="section bg-light">

        <Container>
          <h2 className="section-title">About Me</h2>
          <Row className="align-items-center">
            <Col md={4} className="mb-4 mb-md-0">
              
            <Button 
                  variant="primary" 
                  className="download-resume-btn"
                  onClick={() => window.open('https://drive.google.com/file/d/1CKoyNUGti6qWSsO8wakfoVWxP7hFvlsG/view?usp=sharingn', '_blank')}
                >
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download Resume
                </Button>
                
            
            </Col>
            <Col md={8}>
              <div className="about-content">
                <p className="about-text">
                I am a skilled software developer with expertise in both frontend and backend development.
                 I specialize in building responsive and scalable web applications using modern 
                 technologies and best practices. Passionate about creating innovative solutions,
                  I thrive on solving complex problems and optimizing performance. With a strong 
                  commitment to continuous learning, I stay updated with the latest industry trends 
                  to deliver high-quality software. I am eager to contribute my skills and creativity
                   to impactful projects and dynamic teams.
                </p>
               
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="section">
        <Container>
          <h2 className="section-title">Skills</h2>
          <div className="row">
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-html5"></i>
                </div>
                <h5>JAVA</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <h5>SQL</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-js"></i>
                </div>
                <h5>HIBERNATE</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-react"></i>
                </div>
                <h5>SPRING MVC</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-typescript"></i>
                </div>
                <h5>SPRING BOOT</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-tailwind"></i>
                </div>
                <h5> HTML5</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-java"></i>
                </div>
                <h5>CSS</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h5>JAVA SCRIPT</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h5>REACT JS</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h5>BOOTSTRAP</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h5>MYSQL</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-node-js"></i>
                </div>
                <h5>POSTMAN</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h5>RESTful % API</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h5>GitHub</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h5>OpenAI</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h5>GEMINI API</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-git-alt"></i>
                </div>
                <h5>MAVEN</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fab fa-github"></i>
                </div>
                <h5>SPRING SECURITY@JWT</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="skill-card">
                <div className="skill-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h5>Maven</h5>
                <div className="skill-level">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

              
          </div>
        </Container>
      </section>

      <section id="projects" className="section bg-light">
        <Container>
          <h2 className="section-title">Projects</h2>
          <div className="row">
            {/* First Row */}
            <div className="col-md-6 mb-4">
              <div className="card project-card">
                <div className="card-body">
                  <div className="project-icon">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
                  </div>
                  <h5 className="card-title">Email Assistant</h5>
                  <div className="project-meta">
                    <span className="project-role">Developed Independently</span>
                  </div>
                  <p className="card-text">
                    Developed an AI-powered email management system that helps users organize, prioritize, and respond to emails efficiently.
                    Features include smart categorization, automated responses, and email analytics.
                  </p>
                  <div className="project-tech">
                    <span className="tech-badge">Java</span>
                    <span className="tech-badge">SpringBoot</span>
                    <span className="tech-badge">React.js</span>
                    <span className="tech-badge">Gemini Api</span>
                    <span className="tech-badge">HTML5</span>
                    <span className="tech-badge">Bootstrap CSS</span>
                    <span className="tech-badge">Git Hub</span>
                    
                  </div>
                  <div className="project-achievements">
                    <p>• AI-powered Email Assistant that helps users 
                       summarize,and manage emails efficiently.</p>
                    <p>• Integrated OpenAI API with Spring Boot for email generation and response</p>
                    <p>•Optimized backend performance with API calls&MySQL database management.</p>
                    <p>• Implemented authentication and user session management for secure access.<p/>
                  

</p>



                  {/* GitHub Link with Right Arrow Icon */}
                  <a 
                    href="https://github.com/ManojReddyMula/AI-Email-Assistant.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-icon mt-2 d-inline-block"
                  >
                    View Code <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card project-card">
                <div className="card-body">
                  <div className="project-icon">
                    <FontAwesomeIcon icon={faHospital} size="3x" />
                  </div>
                  <h5 className="card-title">Health Care Management</h5>
                  <div className="project-meta">
                    <span className="project-role">Developed Idependently"</span>
                  </div>
                  <p className="card-text">
                    Created a comprehensive healthcare system that manages patient records, appointments, billing, and medical inventory.
                    Includes features for doctors, nurses, and administrative staff.
                  </p>
                  <div className="project-tech">
                    <span className="tech-badge">Java</span>
                    <span className="tech-badge">Spring Boot</span>
                    <span className="tech-badge">MySQL</span>
                    <span className="tech-badge">Spring Security</span>
                    <span className="tech-badge">React js</span>

                  </div>
                  <div className="project-achievements">
                    <p>• Streamlined patient registration process reducing time by 60%</p>
                    <p>• Efficient Appointment Management: Created a real-time appointment booking system</p>
                  <p>• Improved query efficiency for handling large volumes of patient and medical records.</p>
                <p>• Designed and integrated RESTful APIs, enabling smooth communication between the frontend and backend.</p>
                   

                  </div>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="col-md-6 mb-4">
              <div className="card project-card">
                <div className="card-body">
                  <div className="project-icon">
                    <FontAwesomeIcon icon={faUsers} size="3x" />
                  </div>
                  <h5 className="card-title">Employee Management System</h5>
                  <div className="project-meta">
                    <span className="project-role">Backend Developer</span>
                  </div>
                  <p className="card-text">
                    Built a complete solution for managing employee data, 
                    Features include Adding ,Deleting, Updating  employee data.
                  </p>
                  <div className="project-tech">
                    <span className="tech-badge">React js</span>
                    <span className="tech-badge"> Postman</span>
                    <span className="tech-badge">Api Testing</span>
                    <span className="tech-badge">Spring boot</span>
                    <span className="tech-badge">RestFull API</span>
                  </div>
                  <div className="project-achievements">
                    <p>• Employee Management System with CRUD operations using Spring Boot,React.js,and MySQL.</p>
                    <p>• Built RESTful APIs to enable smooth communication between frontend and backend.</p>
                    <p>• Implemented employee record management, including adding, updating, deleting, and viewing employee details.</p>


                     {/* GitHub Link with Right Arrow Icon */}
                  <a 
                    href="https://github.com/ManojReddyMula/Employee-Management-System.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-icon mt-2 d-inline-block"
                  >
                    View Code <FontAwesomeIcon icon={faArrowRight} />
                  </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card project-card">
                <div className="card-body">
                  <div className="project-icon">
                    <FontAwesomeIcon icon={faBoxes} size="3x" />
                  </div>
                  <h5 className="card-title">HR Management System</h5>
                  <div className="project-meta">
                    <span className="project-role">Frontend Lead</span>
                  </div>
                  <p className="card-text">
                    Developed a comprehensive HR platform for managing recruitment, onboarding, training, and employee development.
                    Includes performance reviews, goal tracking, and analytics dashboard.
                  </p>
                  <div className="project-tech">
                    <span className="tech-badge">React js</span>
                    <span className="tech-badge">Bootstrap</span>
                    <span className="tech-badge">SpringBott</span>
                    <span className="tech-badge">Postman</span>
                    <span className="tech-badge">HTML5</span>

                  </div>
                  <div className="project-achievements">
                    <p>• Full-stack HR Management System to manage employees, departments, and leave requests.</p>
                    <p>• Implemented role-based access control for administrators and employees using Spring Security & JWT.</p>
                    <p>• Designed a responsive and user-friendly UI with React.js and Bootstrap.</p>
                    <p>• Improved employee engagement by 40%</p>

                     {/* GitHub Link with Right Arrow Icon */}
                  <a 
                    href="https://github.com/ManojReddyMula/Hr-Management-System" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-icon mt-2 d-inline-block"
                  >
                    View Code <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="certifications" className="section">
        <Container>
          <h2 className="section-title">Certifications</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="certification-card">
                <div className="certification-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="certification-content">
                  <h4>Accenture Nordics</h4>
                  <h5>Software Engineering Job Simulation</h5>
                  <div className="certification-details">
                    <p><strong>Credential ID:</strong> LnTBNkbL2ZAKDGZeR</p>
                    <a 
                      href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_Le2ffsRBrqvsek3zv_1734364094674_completion_certificate.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      View Certificate <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="certification-card">
                <div className="certification-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="certification-content">
                  <h4>Hewlett Packard Enterprise</h4>
                  <h5>Software Engineering Job Simulation</h5>
                  <div className="certification-details">
                    <p><strong>Credential ID:</strong> 7LEzRi8BWtvnK3Ayf</p>
                    <a 
                      href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_Le2ffsRBrqvsek3zv_1734944449309_completion_certificate.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      View Certificate <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="certification-card">
                <div className="certification-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="certification-content">
                  <h4>Goldman Sachs</h4>
                  <h5>Operations Job Simulation</h5>
                  <div className="certification-details">
                    <p><strong>Credential ID:</strong> BFYptXSNC4TupPeqj</p>
                    <a 
                      href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_Le2ffsRBrqvsek3zv_1734092753994_completion_certificate.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      View Certificate <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="certification-card">
                <div className="certification-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="certification-content">
                  <h4>J Spider Training Institute</h4>
                  <h5>Full Stack Java Developer Certification</h5>
                  <div className="certification-details">
                    <p>Completed comprehensive training in Java-based full-stack development</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="certification-card">
                <div className="certification-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="certification-content">
                  <h4>BCG</h4>
                  <h5>Strategy Consulting Job Simulation</h5>
                  <div className="certification-details">
                    <p><strong>Credential ID:</strong> PwSKEqjifJjB2MprS</p>
                    <a 
                      href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/ntTvo6ru6Tq3A2JPq_SKZxezskWgmFjRvj9_Le2ffsRBrqvsek3zv_1734103202243_completion_certificate.pdf" 
          target="_blank"
          rel="noopener noreferrer"
                      className="certification-link"
                    >
                      View Certificate <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="section bg-light">
        <Container>
          <h2 className="section-title">Contact</h2>
          <form action="https://api.web3forms.com/submit" method="POST" className="left-container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <form className="contact-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          </form>
        </Container>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button 
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      )}

      <footer className="footer">
        <Container>
          <Row>
            <Col md={4} className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>
            <Col md={4} className="footer-section">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/manoj-reddy-mula-101771225/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://github.com/ManojReddyMula" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> mulamanojreddy24495@gmail.com</p>
                <p><i className="fas fa-phone"></i> +91 9381424886</p>
                <p><i className="fas fa-map-marker-alt"></i> Hyderabad, India</p>
              </div>
            </Col>
            <Col md={4} className="footer-section">
        
              
            </Col>
          </Row>
          <div className="footer-bottom">
            <Row>
              <Col md={6}>
                <p className="copyright">© 2024 MULA MANOJ REDDY. All rights reserved.</p>
              </Col>
              <Col md={6} className="text-md-end">
                <p className="footer-text">Made with ❤️ using React</p>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
