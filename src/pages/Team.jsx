import { Container, Row, Col, Card } from "react-bootstrap";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Alex has over 15 years of experience in software development and product management.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "CTO",
      bio: "Sarah leads our technical team with expertise in React, Node.js, and cloud architecture.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Michael specializes in frontend development and has contributed to numerous open-source projects.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Jessica Rodriguez",
      role: "UX Designer",
      bio: "Jessica brings creative solutions to complex problems with her background in user experience design.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Backend Developer",
      bio: "David is an expert in database optimization and API development.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Emily Wilson",
      role: "Marketing Director",
      bio: "Emily drives our marketing strategy with her innovative approach to digital marketing.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="team-page">
      {/* Header Section */}
      <div className="team-header text-center py-5">
        <Container>
          <h1 className="display-4 mb-3">Our Team</h1>
          <p className="lead mb-5">
            Meet the talented people behind our success. Our diverse team brings
            together expertise from various fields to deliver exceptional
            products.
          </p>
        </Container>
      </div>

      {/* Team Members Section */}
      <Container className="py-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {teamMembers.map((member) => (
            <Col key={member.id}>
              <Card className="team-card h-100 shadow-sm">
                <div className="team-img-container">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                    className="team-img"
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <div className="mb-2 text-primary">{member.role}</div>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Company Values Section */}
      <div className="values-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Values</h2>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <div className="text-center">
                <div className="value-icon-container mb-3">
                  <i className="value-icon bi bi-lightbulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>
                  We constantly push boundaries and explore new technologies to
                  deliver cutting-edge solutions.
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <div className="value-icon-container mb-3">
                  <i className="value-icon bi bi-people"></i>
                </div>
                <h3>Collaboration</h3>
                <p>
                  We believe in the power of teamwork and open communication to
                  achieve exceptional results.
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <div className="value-icon-container mb-3">
                  <i className="value-icon bi bi-shield-check"></i>
                </div>
                <h3>Integrity</h3>
                <p>
                  We are committed to honesty, transparency, and ethical
                  practices in everything we do.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Team;
