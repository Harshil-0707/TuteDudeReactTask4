import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Badge,
  ProgressBar,
  Tabs,
  Tab,
} from "react-bootstrap";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data for dashboard
  const stats = [
    { id: 1, title: "Users", value: "1,254", icon: "people", color: "primary" },
    {
      id: 2,
      title: "Revenue",
      value: "$34,245",
      icon: "currency-dollar",
      color: "success",
    },
    {
      id: 3,
      title: "Tasks",
      value: "24",
      icon: "check2-square",
      color: "warning",
    },
    {
      id: 4,
      title: "Pending",
      value: "7",
      icon: "hourglass-split",
      color: "danger",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      user: "John Doe",
      action: "Created a new project",
      time: "2 hours ago",
      status: "success",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Updated user profile",
      time: "4 hours ago",
      status: "info",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "Completed task #45",
      time: "1 day ago",
      status: "primary",
    },
    {
      id: 4,
      user: "Sarah Williams",
      action: "Submitted a bug report",
      time: "2 days ago",
      status: "warning",
    },
    {
      id: 5,
      user: "David Kim",
      action: 'Deleted project "Old Website"',
      time: "3 days ago",
      status: "danger",
    },
  ];

  const projects = [
    { id: 1, name: "Website Redesign", progress: 75, status: "In Progress" },
    {
      id: 2,
      name: "Mobile App Development",
      progress: 32,
      status: "In Progress",
    },
    { id: 3, name: "Database Migration", progress: 100, status: "Completed" },
    { id: 4, name: "API Integration", progress: 0, status: "Not Started" },
  ];

  return (
    <div className="dashboard-page py-4">
      <Container fluid>
        <h1 className="mb-4">Dashboard</h1>

        {/* Stats Cards */}
        <Row className="g-4 mb-4">
          {stats.map((stat) => (
            <Col key={stat.id} md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex align-items-center">
                  <div
                    className={`stat-icon-container bg-${stat.color} bg-opacity-10 me-3`}
                  >
                    <i className={`bi bi-${stat.icon} text-${stat.color}`}></i>
                  </div>
                  <div>
                    <div className="stat-title text-muted">{stat.title}</div>
                    <div className="stat-value h3 mb-0">{stat.value}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Main Content */}
        <Row>
          <Col lg={8}>
            <Card className="shadow-sm mb-4">
              <Card.Header>
                <Tabs
                  activeKey={activeTab}
                  onSelect={(k) => setActiveTab(k)}
                  className="card-header-tabs"
                >
                  <Tab eventKey="overview" title="Overview" />
                  <Tab eventKey="analytics" title="Analytics" />
                  <Tab eventKey="reports" title="Reports" />
                </Tabs>
              </Card.Header>
              <Card.Body>
                {activeTab === "overview" && (
                  <div>
                    <h4 className="mb-4">Project Status</h4>
                    <div className="table-responsive">
                      <Table hover>
                        <thead>
                          <tr>
                            <th>Project Name</th>
                            <th>Progress</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projects.map((project) => (
                            <tr key={project.id}>
                              <td>{project.name}</td>
                              <td style={{ width: "40%" }}>
                                <ProgressBar
                                  now={project.progress}
                                  label={`${project.progress}%`}
                                  variant={
                                    project.progress === 100
                                      ? "success"
                                      : project.progress > 0
                                      ? "primary"
                                      : "secondary"
                                  }
                                />
                              </td>
                              <td>
                                <Badge
                                  bg={
                                    project.status === "Completed"
                                      ? "success"
                                      : project.status === "In Progress"
                                      ? "primary"
                                      : "secondary"
                                  }
                                >
                                  {project.status}
                                </Badge>
                              </td>
                              <td>
                                <Button variant="outline-primary" size="sm">
                                  View
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                )}

                {activeTab === "analytics" && (
                  <div className="text-center py-5">
                    <h4 className="mb-3">Analytics Dashboard</h4>
                    <p className="text-muted">
                      Analytics data visualization would appear here.
                    </p>
                  </div>
                )}

                {activeTab === "reports" && (
                  <div className="text-center py-5">
                    <h4 className="mb-3">Reports Dashboard</h4>
                    <p className="text-muted">
                      Generated reports would appear here.
                    </p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm mb-4">
              <Card.Header>
                <h5 className="card-title mb-0">Recent Activities</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="activity-feed">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="activity-item p-3 border-bottom"
                    >
                      <div className="d-flex">
                        <div
                          className={`activity-icon bg-${activity.status} bg-opacity-10 me-3`}
                        >
                          <i
                            className={`bi bi-person text-${activity.status}`}
                          ></i>
                        </div>
                        <div>
                          <div>
                            <strong>{activity.user}</strong>
                          </div>
                          <div>{activity.action}</div>
                          <small className="text-muted">{activity.time}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="link" className="text-decoration-none">
                  View All Activities
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
