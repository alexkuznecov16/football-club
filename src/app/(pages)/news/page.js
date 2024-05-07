'use client';
import Link from 'next/link';
import Image from 'next/image';
import './news.css';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {useState, useEffect} from 'react';
import newsData from '../../data/news.json';
import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';

const News = () => {
	const [news, setNews] = useState(newsData);

	return (
		<>
			<Header section={true} />
			<section className='News'>
				<h3 className='section-title'>NEWS</h3>
				<div className='container'>
					<div className='News__inner'>
						{news
							.slice()
							.reverse()
							.map((item, index) => (
								<div key={index} className='News-item'>
									<Link href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
										<Image src={item.poster} alt='poster' width={200} height={300} />
									</Link>
									<Link href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
										<span className='News-title'>{item.title}</span>
									</Link>
									<p className='News-text'>{item.subtitle}</p>
									<Link href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className='News-link'>
										Read more <MdKeyboardArrowRight />
									</Link>
									<span className='date'>{item.date}</span>
								</div>
							))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default News;
