import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
// import API from "../utils/API";

class Home extends Component {

    render() {

        return (

            <div>

                <Nav />

                <Container>

                    <Row>

                        <Col size="md-12">

                            <Jumbotron>
                                <h1>Test Homepage</h1>
                                <h3>placeholder text </h3>
                            </Jumbotron>

                        </Col>

                    </Row>

                </Container>

                <Container>

                   <div className="center">Hello World</div>

                </Container>

            </div>

        );
    }
}

export default Home;