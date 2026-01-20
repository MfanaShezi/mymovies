import React, { useEffect,useState,useRef,useCallback } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import Card from "./components/Card";
import { useDebounce } from "react-use";


		//Apirequests  Setup
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
		const [errorMessage, seterrorMesssage] = useState(null);
		const [movielist, setmovielist] = useState([]);
		const [isloading , setisloading]=useState(false)
		//const[debouncedterm,setdebounceterm]=useDebounce('')

		//waits 500ms after user has typed to send a request
		//useDebounce(() => setdebounceterm(searchterm),500,[searchterm])
		//const [debouncedSearch] = useDebounce(searchterm, 500);
		 
		const fetchMovies = async (query= '') => {
			setisloading(true);
			seterrorMesssage('');

			try {
				const endpoint= query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`  ;
				const response = await fetch(endpoint, API_OPTIONS);

				if(!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				console.log(data);

				if(data.response=='False'){
					seterrorMesssage(data.Error || 'Failed to fetch movies ');
					setmovielist([]);
					return;
				}

				setmovielist(data.results || [])

			} catch (errorMessage) {
				console.errorMessage("Error fetching movies:", errorMessage);
				seterrorMesssage("Failed to fetch movies. Please try again later.");
			}
			finally{
				setisloading(false);
			}
		}

		
		//effects
		useEffect(() => {
			fetchMovies(searchterm);
		  },[searchterm])
		


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
							<h2 className="mt-[40px]">All Movies</h2>

							{
								isloading ? (<Spinner/> )
								: errorMessage ? (<p className="text-red-500">{errorMessage} </p> ) 
								: (
									<ul>
										{movielist.map((movie)=>(
											<Card key={movie.id} movie={movie} />
										))}
									</ul>
									)
							}


						 </section>
				</div>
			</div>
		</main>
	);
};

export default App;
