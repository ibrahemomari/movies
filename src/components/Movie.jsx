import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Movie({ movie }) {
  const [movies, setmovies] = useState({});

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("move"));
    setmovies(data);
  });

  return (
    <>
      <Container>
        <Row>
          <Col xs={9}>
            <Container>
              <Row>
                {movies && (
                  <Card key={movies.id}>
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>
                        <div
                          className="movie-vote_average"
                          style={{
                            border: `2px solid ${
                              movies.vote_average > 7
                                ? "green"
                                : movies.vote_average < 7 &&
                                  movies.vote_average > 6
                                ? "yellow"
                                : "red"
                            }`,
                          }}
                        >
                          <p>{movies.vote_average}</p>
                        </div>
                      </Card.Title>
                    </Card.ImgOverlay>
                    <Card.Footer>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.Footer>
                  </Card>
                )}
              </Row>
            </Container>
          </Col>
          <Col xs={3}>
            <Container>
              <Row>you may</Row>
              <Row></Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Movie;
