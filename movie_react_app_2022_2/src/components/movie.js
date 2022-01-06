import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <Link to={{pathname:'/movie-detail', params:{year:year, title:title, summary:summary, poster:poster, genres:genres} }}>
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">                
                <h3 className="movie__title" style={{backgroundColor:'red'}}>{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {/* map을 활용하여 return 값이 다수가 나오면 index를 붙여야 함 */}
                    {genres.map((genres, index) => {
                        return <li key={index}className="movie__genre">{genres}</li>
                    })}
                </ul>
                <p className="moive__summary">{summary.slice(0,180)}...</p>
            </div>
            </Link>
        </div>
    );    
}


Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;