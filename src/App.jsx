import React, { useEffect,useState } from "react";
import Search from "./components/Search";

//effects
		const API_BASE_URL ="https://api.themoviedb.org/3";
		const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
		const API_OPTIONS={
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Content-Type': 'application/json;charset=utf-8'
			}
		};

const App = () => {
		//states
		const [searchterm, setsearchterm] = useState('');
		const [error, seterror] = useState(null);

		 
		const fetchMovies = async () => {
			try {
				const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
				const response = await fetch(endpoint, API_OPTIONS);

				if(!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.error("Error fetching movies:", error);
				seterror("Failed to fetch movies. Please try again later.");
			}
		}

		useEffect(() => {
			fetchMovies();
		  },[])
		


	return (
		<main>
			<div className="pattern">
				<div>
					   <header>
				         	<img src="./hero.png" alt="Hero-image" />
							<h1>Find <span className="text-gradient">Movies</span> you  will enjoy without the hassle</h1>
						</header>
				         <Search searchterm={searchterm} setsearchterm={setsearchterm}  />
						 <section className="all-movies">
							<h2>All Movies</h2>

							{error && <p className="error-message">{error}</p>}
						 </section>
				</div>
			</div>
		</main>
	);
};

export default App;
