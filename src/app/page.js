'use client';
import About from './Components/About';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MatchCountdown from './Components/MatchCountdown';
import News from './Components/News';
import Partners from './Components/Partners';
import Standings from './Components/Standings';
import Statistics from './Components/Statistics';

import {useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	useEffect(() => {
		// Correct usage of useEffect
		Aos.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<>
			<div className='mainPage'>
				<>
					<Header />
					<Hero />
					<MatchCountdown />
					<Standings />
					<Statistics />
					<About />
					<News />
					<Gallery />
					<Partners />
					<Footer />
				</>
			</div>
		</>
	);
}
