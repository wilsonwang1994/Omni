import React from 'react';
import './Movie.css';


const Movie = (props) => {
  const {name, img, price } = props;
  return (
    // <div className="dib br3 pa3 ma2 grow bw2 shadow-5">
    //   <article className="hide-child relative ba b--black-20 mw5 center">
    //     <div>
    //       <img src={img} className="fl w-50 w-25-l link overflow-hidden" alt={name} />
    //     </div>
    //     <div className="pa2 bt b--black-20">
    //       <a className="f6 db link dark-blue hover-blue" href="#">{name}</a>
    //       <p className="f6 gray mv1">5 mutual friends</p>
    //     </div>
    //   </article>
    // </div>
    <div className="dib br3 ma2 grow bw2 shadow-5">
      <img src={img} className="fl mw-100 link overflow-hidden" alt={name} />
    </div>
    // <div className='dib br3 pa3 ma2 grow bw2 shadow-5'>
    //   <h6>{name}</h6>
    //   <img alt='movie' src={img} width='100' height='120'/>
    //   <div>
    //     <p>{price}</p>
    //   </div>
    // </div>
  );
}

export default Movie;
