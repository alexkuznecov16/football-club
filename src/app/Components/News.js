'use client';
import Link from 'next/link';
import Image from 'next/image';
import './news.css';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {useState} from 'react';
import newsData from '../news.json';

const News = () => {
	const [news, setNews] = useState(newsData.slice(-8).reverse());
	console.log(news);
	return (
		<div className='News'>
			<h3 className='section-title'>NEWS</h3>
			<div data-aos='fade-up' className='container'>
				<div className='News__inner'>
					{news.map((item, index) => (
						<div key={index} className='News-item'>
							<Link href={`/news/${newsData.length - index}`}>
								<Image src={item.poster} alt='poster' width={200} height={300} />
							</Link>
							<Link href={`/news/${newsData.length - index}`}>
								<span className='News-title'>{item.title}</span>
							</Link>
							<p className='News-text'>{item.subtitle}</p>
							<Link href={`/news/${newsData.length - index}`} className='News-link'>
								Read more <MdKeyboardArrowRight />
							</Link>
							<span className='date'>{item.date}</span>
						</div>
					))}
				</div>
				<Link className='more' href={'/news'}>
					See more
				</Link>
			</div>
		</div>
	);
};

export default News;
