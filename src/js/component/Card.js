import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div>
        <div className="card">
          <img src={props.item.url} className="card-img-top" alt="images"/>
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={/character/`${props/item.uid}`} className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
    </div>
  )
}
export default Card;