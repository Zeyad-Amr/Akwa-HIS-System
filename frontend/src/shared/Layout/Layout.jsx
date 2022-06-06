import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import "./Layout.css";
import NavBar from "../NavBar/NavBar";
const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  //   if (!Object.keys(authHeader()).length) {
  //     return <Redirect to="/login" />;
  //   }

  return (
    <Container fluid>
      <Row>
        <NavBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      </Row>
      <Row>
        <Col
          xs={collapsed ? 1 : 2}
          md={collapsed ? 1 : 2}
          lg={collapsed ? 1 : 2}
        >
          <div
            style={{
              height: "100%",
              position: "fixed",
              background: "red",

              left: "0px",
              width: collapsed ? "" : "20%",
              paddingTop: "4rem",
            }}
          ></div>
        </Col>
        <Col
          xs={collapsed ? 11 : 10}
          md={collapsed ? 11 : 10}
          lg={collapsed ? 11 : 10}
          style={{ paddingTop: "6rem" }}
        >
          <div>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

//   <NavMenu collapsed={collapsed} />
