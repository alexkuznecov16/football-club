'use client';
import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';

import Image from 'next/image';
import Link from 'next/link';

import stadiumsData from '@/app/data/stadiums.json';

import './stadiums.css';
import {useState} from 'react';

export default function Stadiums() {
	const [stadiums, setStadiums] = useState(stadiumsData);
	return (
		<div className='mainPage'>
			<Header section={true} />
			<section className='stadiums'>
				<h2 className='section-title'>STADIUMS</h2>
				<div className='container'>
					<div className='stadiums__inner'>
						{stadiums.map((item, key) => (
							<div className='stadium--item' key={key}>
								<Link className='stadium--image-link' href={`/stadiums/${item.title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
									<Image width={200} height={200} src={item.image} alt={item.title} quality={100} priority={true} />
								</Link>
								<div className='stadium__info'>
									<h3 className='stadium--name'>{item.title}</h3>
									<p className='stadium--capacity'>Capacity: {item.capacity} seats</p>
									<Link className='stadium--add-info' href={`/stadiums/${item.title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
										LEARN MORE
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
