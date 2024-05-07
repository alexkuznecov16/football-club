'use client';
import Link from 'next/link';
import Image from 'next/image';
import './news.css';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {useState, useEffect} from 'react';
import newsData from '../../data/news.json';

const News = () => {
	const [isMobileMenu, setMobileMenu] = useState(false);
	const [news, setNews] = useState([]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1160) {
				setMobileMenu(true);
				setNews(newsData.slice(-4).reverse());
			} else {
				setMobileMenu(false);
				setNews(newsData.slice(-8).reverse());
			}
		};

		handleResize(); // Проверяем при загрузке страницы

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className='News'>
			<h3 className='section-title'>NEWS</h3>
			<div data-aos='fade-up' className='container'>
				<div className='News__inner'>
					{news.map((item, index) => (
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
				<Link className='more' href={'/news'}>
					See more
				</Link>
			</div>
		</div>
	);
};

export default News;
