import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  FormControl,
  ListGroup,
  Row,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Movie from "./Movie";

function Movies({ movies, loading }) {
  const [moviesType, setmoviesType] = useState("");
  if (loading) {
    return <h2>Loading....</h2>;
  }
  const active = (id) => {
    if (id === 1) {
      let listItem = document.getElementById(`list-item-1`);
      let listItem2 = document.getElementById(`list-item-2`);
      let listItem3 = document.getElementById(`list-item-3`);
      listItem.classList.add("active");
      listItem2.classList.remove("active");
      listItem3.classList.remove("active");
      setmoviesType("UPCOMING");
    } else if (id === 2) {
      let listItem = document.getElementById(`list-item-1`);
      let listItem2 = document.getElementById(`list-item-2`);
      let listItem3 = document.getElementById(`list-item-3`);
      listItem2.classList.add("active");
      listItem.classList.remove("active");
      listItem3.classList.remove("active");
      setmoviesType("POPULAR");
    } else {
      let listItem = document.getElementById(`list-item-1`);
      let listItem2 = document.getElementById(`list-item-2`);
      let listItem3 = document.getElementById(`list-item-3`);
      listItem3.classList.add("active");
      listItem.classList.remove("active");
      listItem2.classList.remove("active");
      setmoviesType("TOP RATED");
    }
  };
  const details = async (id) => {
    console.log(id);
    let API = `https://api.themoviedb.org/3/movie/${id}?api_key=880cd24d994cf7ba60139550656e326a`;
    let res = await axios.get(API);
    localStorage.setItem("move", JSON.stringify(res.data));
    <Movie movie={res.data} />;
  };
  return (
    <>
      <Container className="movies-contianer">
        <Row>
          <Col xs={5}></Col>
          <Col xs={5}></Col>
          <Col xs={2}>
            <form>
              <FormControl
                className="search-input"
                type="text"
                placeholder="Search.."
                name="search"
              />
            </form>
          </Col>
        </Row>
        <Row>
          <ListGroup horizontal className="movies-type-list">
            <ListGroup.Item onClick={() => active(1)} id="list-item-1">
              UPCOMING
            </ListGroup.Item>
            <ListGroup.Item onClick={() => active(2)} id="list-item-2">
              POPULAR
            </ListGroup.Item>
            <ListGroup.Item onClick={() => active(3)} id="list-item-3">
              TOP RATED
            </ListGroup.Item>
          </ListGroup>
        </Row>
        <Row>
          {movies.map((movie) => {
            return (
              <Card key={movie.id} onClick={() => details(movie.id)}>
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <div
                      className="movie-vote_average"
                      style={{
                        border: `2px solid ${
                          movie.vote_average > 7
                            ? "green"
                            : movie.vote_average < 7 && movie.vote_average > 6
                            ? "yellow"
                            : "red"
                        }`,
                      }}
                    >
                      <p>{movie.vote_average}</p>
                    </div>
                  </Card.Title>
                </Card.ImgOverlay>
                <Card.Footer>
                  <Card.Text>
                    <ListGroup className="movies-footer-list">
                      <ListGroup.Item>{movie.title}</ListGroup.Item>
                      <ListGroup.Item>{movie.release_date}</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Footer>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Movies;
