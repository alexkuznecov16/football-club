'use client';

import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';

import './history.css';
import {FaRegStar} from 'react-icons/fa6';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export default function page() {
	// animation on scroll
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		Aos.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<>
			<Header section={true} />
			<section className='History'>
				<h3 className='section-title'>HISTORY</h3>
				<div className='container'>
					<div data-aos='fade-right' className='container-box left-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2007</h2>
							<p>FK Spartaks was established in 2007. The club started its first season in 2.līga - the third division of Latvian football. During the first year, the club won the division title and gained a promotion to 1.līga - the second division.</p>
							<div className='left-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-left' className='container-box right-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2008</h2>
							<p>In 2008 the club played its first season in the second tier of Latvian football and finished in 11th place in the 15 team competition, with 9 wins and 6 draws in 28 games.</p>
							<div className='right-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-right' className='container-box left-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2009</h2>
							<p>In 2009 the club entered its second season in 1.līga. In the 14 team competition, the club finished the season in 12th position after wining 4 out of 26 fixtures.</p>
							<div className='left-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-left' className='container-box right-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2010</h2>
							<p>In 2010 the club finished its third consecutive season in 1.līga in 9th place out of 12 teams, after wining 6 out of 24 games. The top goal scorer was Konstantins Bulohovs with 9 goals.</p>
							<div className='right-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-right' className='container-box left-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2011</h2>
							<p>In 2011, during the clubs fourth season in the second division, the club finished 3rd place, but due to second place Liepājas Metalurgs 2 not being eligible to promotion, FK Spartaks were promoted to Virslīga, the top flight of Latvian football.</p>
							<div className='left-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-left' className='container-box right-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2012</h2>
							<p>The club finished its first year in the top division in 5th place out of 10 teams. Both Antons Jemeļins and David Cortes shared the best goal scorer title with 12 goals each.</p>
							<div className='right-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-right' className='container-box left-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2013</h2>
							<p>The club finished its second season in Virsliga in 7th place out of 10 teams, having won 7 out of 27 games. Daniel Garcia with 6 goals was the top scorer of the team.</p>
							<div className='left-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-left' className='container-box right-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2014</h2>
							<p>The club finished the 2014 season with 14 wins in 36 games, giving the club the 6th place in the 10 team competition. Top goal scorer was Edgars Gauračs with 14 goals.</p>
							<div className='right-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-right' className='container-box left-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2015</h2>
							<p>Only 8 teams participated in the 2015 Virsliga season. Our club finished in 5th place with 5 wins in 24 games. For the second consecutive year Edgars Gauračs was the top goal scorer with 4 goals.</p>
							<div className='left-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-left' className='container-box right-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2016</h2>
							<p>In 2016, less than 10 years after the club was formed, the club became the champions of Latvia after 17 wins in 28 games. Dmitry Platonov scored 12 goals, making him the best goal scorer of the team.</p>
							<div className='right-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-right' className='container-box left-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2017</h2>
							<p>In 2017 the club shocked Latvian football again and won the league title for the second time in a row with 14 wins in 24 fixtures. Evgeniy Kozlov became the clubs top goal scorer with 10 goals.</p>
							<div className='left-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-left' className='container-box right-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2018</h2>
							<p>After two consecutive league titles, the club finished the 2018 season in 5th place out of 8 teams. Aleksejs Višņakovs was the top goal scorer with 12 goals.</p>
							<div className='right-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-right' className='container-box left-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2019</h2>
							<p>In 2019, the club finished 5th place out of 9 teams. The top goal scorer was Nemanja Belakovič with 11 scored goals.</p>
							<div className='left-container-arrow'></div>
						</div>
					</div>
					<div data-aos='fade-left' className='container-box right-container'>
						<div className='text-box'>
							<FaRegStar />
							<h2>2021</h2>
							<p>This year, Spartaks finished 5th in the Latvian Virsliga, and the Cameroonian 19-year-old striker Leonel Wamba Djouffo became the top scorer with 14 goals.</p>
							<div className='right-container-arrow'></div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
