import React from 'react'
import Card from './Card'
import './Mainbody.css'

function Mainbody() {
    return (
        <div>
           <div class="body">
<div class="grid">

<Card image="/img/rome.jpg" title="Rome"
 text="Rome is known for its stunning <strong> architecture</strong>,
 with the Colleseum, Pantheon, and Trevi Fountain as the main
 attractions."/>



    <div class="grid-item">
      <div class="card">
        <img class="card-img" src="/img/rome.jpg" alt="Rome" />
        <div class="card-content">
          <h1 class="card-header">Rome</h1>
          <p class="card-text">
            Rome is known for its stunning <strong> architecture</strong>,
            with the Colleseum, Pantheon, and Trevi Fountain as the main
            attractions.
          </p>
          <button class="card-btn">Visit <span>&rarr;</span></button>
        </div>
      </div>
    </div>



    <div class="grid-item">
      <div class="card">
        <img
          class="card-img"
          src="/img/grand-canyon.jpg"
          alt="Grand Canyon"
        />
        <div class="card-content">
          <h1 class="card-header">Grand Canyon</h1>
          <p class="card-text">
            One of the world's natural wonders, the iconic Grand Canyon draws
            oohs and aahs from visitors perched
            <strong>towering cliffs</strong>.
          </p>
          <button class="card-btn">Visit <span>&rarr;</span></button>
        </div>
      </div>
    </div> 

    <div class="grid-item">
      <div class="card">
        <img class="card-img" src="/img/maldives.jpg" alt="Maldives" />
        <div class="card-content">
          <h1 class="card-header">Maldives</h1>
          <p class="card-text">
            The Maldives are known for their
            <strong>natural environment</strong> including the blue ocean,
            white beaches, and clean air, attracting tourists.
          </p>
          <button class="card-btn">Visit <span>&rarr;</span></button>
        </div>
      </div>
    </div>
    <div class="grid-item">
      <div class="card">
        <img class="card-img" src="/img/maldives.jpg" alt="Maldives" />
        <div class="card-content">
          <h1 class="card-header">Maldives</h1>
          <p class="card-text">
            The Maldives are known for their
            <strong>natural environment</strong> including the blue ocean,
            white beaches, and clean air, attracting tourists.
          </p>
          <button class="card-btn">Visit <span>&rarr;</span></button>
        </div>
      </div>
    </div>
    <div class="grid-item">
      <div class="card">
        <img class="card-img" src="/img/maldives.jpg" alt="Maldives" />
        <div class="card-content">
          <h1 class="card-header">Maldives</h1>
          <p class="card-text">
            The Maldives are known for their
            <strong>natural environment</strong> including the blue ocean,
            white beaches, and clean air, attracting tourists.
          </p>
          <button class="card-btn">Visit <span>&rarr;</span></button>
        </div>
      </div>
    </div>

    {/* <div class="grid-item">
      <div class="card">
        <img class="card-img" src="/img/maldives.jpg" alt="Maldives" />
        <div class="card-content">
          <h1 class="card-header">Maldives</h1>
          <p class="card-text">
            The Maldives are known for their
            <strong>natural environment</strong> including the blue ocean,
            white beaches, and clean air, attracting tourists.
          </p>
          <button class="card-btn">Visit <span>&rarr;</span></button>
        </div>
      </div>
    </div>  */}





  </div>
</div>
        </div>
    )
}

export default Mainbody
