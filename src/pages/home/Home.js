import React from 'react';
import Nav from '../../components/nav/Nav';
import Banner from '../../components/banner/Banner';
import Row from '../../components/row/Row';
import requests from '../../utils/requests';

function Home() {
	return (
		<div>
			<Nav />
			<Banner />
			< Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
			< Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			< Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			< Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			< Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			< Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			< Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			< Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default Home;