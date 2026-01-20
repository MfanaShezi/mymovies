import React from 'react';

const Card= ({movie : {title, poster_path ,overview,release_date,vote_average,original_language}}) => {
  return (
    <div className='movie-card'>
      {/* <p className="text-white">{title}</p> */}
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png' } alt={title} />

        <div className='mt-4'>
            <h3>{title}</h3>
        </div>
        <div className='content'>
            <div className='rating'>
                <img src='star.svg'  alt="star icon"/>
                 <p>{vote_average ? vote_average.toFixed(1) :'N/A'}</p>
            </div>
             <span>•</span>
             <p className='lang'>{original_language}</p>
             <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>

    </div>

  );
};

export default Card
;