import React from 'react'

function Card(props) {
    return (
          
    <div class="grid-item">
        <div class="card">
        <img
            class="card-img"
            src={props.image}
            alt="Grand Canyon"
        />
        <div class="card-content">
            <h1 class="card-header">{props.title}</h1>
            <p class="card-text">{props.text}</p>
            <button class="card-btn">Visit <span>&rarr;</span></button>
        </div>
        </div>
  </div>
    )
}

export default Card
