import {Card, Button} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

import React from 'react';

const Movie = ({title, year, summary, poster, genres}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={poster} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{year}</Card.Title>
            <ul style={{ width: '18rem' }}>
            {
                genres.map((genre, index) => {
                return (
                    <li key={index}>{genre}</li>
                )
                })
            }
            </ul>
            <Card.Text>
            {summary.slice(0, 180)}...
            </Card.Text>
            <Link to={{
            pathname: '/detail',
            state: { year, title, summary, poster, genres }
            }}>
            <Button variant="primary">Detail</Button>
            </Link>
            <NavLink to={{
            pathname: '/detail2',
            state: {
                year, title, summary, poster, genres
            }
            }}>
            <Button variant="secondary">Detail2</Button>
            </NavLink>
        </Card.Body>
        </Card >
    );
};

export default Movie;