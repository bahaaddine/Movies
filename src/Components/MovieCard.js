import React from 'react'
import {Card} from 'react-bootstrap'
import Rate from './Rate'
function movieCard({movie}) {
  return (
    <div>
      <div class="card" style={{ width: '18rem' }}>
        <img src={movie.image} class="card-img-top" alt={movie.name} />
        <div class="card-body">
          <h5 class="card-title">{movie.name}</h5>
          <p class="card-text">{movie.description}</p>
          <p class="card-text"><Rate rate={movie.rating} /></p>
        </div>
      </div>
    </div>
  )
}

export default movieCard
