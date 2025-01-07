import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodmania from '../../Assets/Projects/FoodMania.png'
import blogmania from '../../Assets/Projects/BlogMania.png'
import employeeAdmin from '../../Assets/Projects/EmployeeAdmin.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodmania}
              isBlog={false}
              title="FoodMania"
              description="Engineered a full-stack web application, Food Mania Web Application, using MERN Stack.
                          Integrated functionalities for booking hotel rooms and reserving dining tables, with
                          dynamic pricing models.
                          Developed a robust cart solution for food ordering, incorporating real-time item management where user can add, remove, update quantities of items.
                          Included a functionality to estimate delivery time based on user location, including distance validation, and integrated PDF generation for generating invoices related to both bookings and food orders."
              demoLink="https://hotel-food-mania.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogmania}
              isBlog={false}
              title="BlogMania"
              description="BlogMania is a backend application developed using Nodejs, EJS and Database enabling dynamic content rendering. Implemented user authentication and authorization. Designed and built RESTful API endpoints to enable efficient CRUD operations for reading, creating, and commenting on blogs, allowing all users to view blogs and signed-in users to create blogs and add comments. Integrated MongoDB Atlas for managing user profiles, blog posts, and comments with optimized queries and database relationships."
              demoLink="https://blogmania-kef3.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeeAdmin}
              isBlog={false}
              title="Employee Management WebApp"
              description="Developed a frontend application for employee task management with authentication features. The system allows admins to assign new Tasks and view tasks status (categorized as new, accepted, completed, or failed) and provides employees with a dashboard to view their tasks. Data storage and retrieval are handled using JSON objects in localStorage, ensuring a seamless user experience."
              demoLink="https://employee-management-nu-one.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
