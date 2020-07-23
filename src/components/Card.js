import React from 'react'

function Card(props) {
    return (
        <div className="card col-md-6 col-lg-3" >
  <img src={`https://robohash.org/${props.img}?set=set2`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.mail}</p>
  </div>
</div>
    )
}

export default Card
