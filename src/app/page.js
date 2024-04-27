'use client';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import MatchCountdown from './Components/matchCountdown/MatchCountdown';
import Standings from './Components/standings/Standings';
import Statistics from './Components/statistics/Statistics';
import About from './Components/about/About';
import News from './Components/news/News';
import Gallery from './Components/gallery/Gallery';
import Partners from './Components/partners/Partners';
import Footer from './Components/footer/Footer';

import {useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
	// animation on scroll
	useEffect(() => {
		Aos.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<>
			<div className='mainPage'>
				<Header isAbsolute={true} />
				<Hero />
				<MatchCountdown />
				<Standings />
				<Statistics />
				<About />
				<News />
				<Gallery />
				<Partners />
				<Footer />
			</div>
		</>
	);
};

export default Home;
