import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className="justify-content-center mb-5">
        <Col md={10}>
          <h2 className="text-center mb-4">About This Application</h2>
          <p className="lead text-center mb-5">
            This application demonstrates several key React concepts and best
            practices.
          </p>

          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>React Router</Card.Title>
                  <Card.Text>
                    This app uses React Router for client-side navigation
                    between different pages without full page reloads, creating
                    a smooth single-page application experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Form Validation</Card.Title>
                  <Card.Text>
                    The form page demonstrates client-side validation for
                    required fields, email format checking, and password length
                    requirements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Lazy Loading</Card.Title>
                  <Card.Text>
                    React's lazy loading and Suspense are used to load the Form
                    and About pages only when needed, improving initial load
                    performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>React Bootstrap</Card.Title>
                  <Card.Text>
                    The application uses React Bootstrap for responsive,
                    mobile-first styling and interactive components like the
                    navigation bar and form elements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
