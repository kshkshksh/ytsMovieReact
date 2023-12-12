import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Movie from "../components/Movie";

const Home = () => {
  const [movies, setMovies] = useState([]) //영화 리스트
  const [isLoading, setLoading] = useState(true)

  const getMovies = () => { // 비동기로 json 정보를 가져온다.
    // axios.get('https://yts-proxy.now.sh/list_movies.json?genre=family&limit=45&sort_by=popular')
    axios.get(`https://yts.mx/api/v2/list_movies.json?genre=family&sort_by=popular`)
      .then((res) => {
        console.log(res)
        setMovies(res.data.data.movies)
        setLoading(false)
      })
  }
  //componentDidMount ,componentDidUpdate
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container>
      {
        isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Row>
            {
              movies.map((movie, index) => {
                return (
                  <Col md={4} key={index}>
                    <Movie
                      key={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                    />
                  </Col>
                )
              })
            }

          </Row>
        )
      }

    </Container>
  )
}

export default Home;