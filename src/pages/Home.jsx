import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4">Welcome to ReactApp</h1>
              <p className="lead fs-4 mb-5">
                A modern React application showcasing multi-page navigation,
                form validation, and component lazy loading
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <Button
                  as={Link}
                  to="/register"
                  variant="primary"
                  size="lg"
                  className="px-4 py-2"
                >
                  Get Started
                </Button>
                <Button
                  as={Link}
                  to="/team"
                  variant="outline-light"
                  size="lg"
                  className="px-4 py-2"
                >
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Key Features</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="feature-icon-container mb-3">
                  <i className="feature-icon bi bi-layers-half"></i>
                </div>
                <Card.Title className="fw-bold">
                  Multi-page Navigation
                </Card.Title>
                <Card.Text>
                  Seamless navigation between pages using React Router without
                  full page reloads
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="feature-icon-container mb-3">
                  <i className="feature-icon bi bi-check-circle"></i>
                </div>
                <Card.Title className="fw-bold">Form Validation</Card.Title>
                <Card.Text>
                  Client-side validation for required fields, email format, and
                  password requirements
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="feature-icon-container mb-3">
                  <i className="feature-icon bi bi-lightning-charge"></i>
                </div>
                <Card.Title className="fw-bold">Lazy Loading</Card.Title>
                <Card.Text>
                  Improved performance with React's lazy loading and code
                  splitting techniques
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <div className="cta-section text-center py-5">
        <Container>
          <h2 className="mb-4">Ready to get started?</h2>
          <Button as={Link} to="/register" variant="primary" size="lg">
            Register Now
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Home;
