'use client';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';

import Image from 'next/image';
import Link from 'next/link';

import './stadium.css';

export default function Stadiums() {
	return (
		<div className='mainPage'>
			<Header />
			<section className='stadiums'>
				<h2 className='section-title'>STADIUMS</h2>
				<div className='stadiums__inner'>
					<div className='stadium--item'>
						<Link className='stadium--image-link' href={'/jurmala-city-stadium-sloka'}>
							<Image width={200} height={300} src={'https://static1.s123-cdn-static-a.com/uploads/328856/800_591073fc9d232.jpg'} alt='img'></Image>
						</Link>
						<div className='stadium__info'>
							<h3 className='stadium--name'>Jurmala City Stadium &quot;Sloka&quot;</h3>
							<p className='stadium--capacity'>Capacity: 2500 seats</p>
							<Link className='stadium--add-info' href={'/jurmala-city-stadium-sloka'}>
								LEARN MORE
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
