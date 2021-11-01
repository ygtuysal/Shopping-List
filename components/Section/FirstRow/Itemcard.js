import React from 'react'

const Itemcard = (props) => {
    return (
        <div className="col-11 col-md-4 col-lg-2 mx-2 mb-11">
        <div className="card p-0 overflow-hidden h-100 shadow">
  <img className="card-img-top img-fluid" src=""/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title"> $ {props.price}</h5>
    <p className="card-text">{props.desc}</p>
    <button href="#" className="btn btn-info">Add</button>
  </div>
</div>
</div>
    )
}

export default Itemcard
