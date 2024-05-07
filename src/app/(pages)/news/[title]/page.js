'use client';
import {useState, useEffect} from 'react';
import newsData from '../../../data/news.json';
import Header from '@/app/Components/header/Header';
import Footer from '@/app/Components/footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import './newsItem.css';
import NotFound from '@/app/not-found';

export default function newsItem({params}) {
	const title = params.title;

	const news = newsData.find(item => item.title.toLowerCase().replace(/\s+/g, '-') === title) || false;

	// eslint-disable-next-line react-hooks/rules-of-hooks
	// useEffect(() => {
	// 	const foundNews = newsData.find(item => item.title === props.params.title);
	// 	setNews(foundNews);
	// }, [props.params.title]);

	return !news ? (
		<>
			<NotFound />
		</>
	) : (
		<div className='mainPage'>
			<Header section={true} />
			<section className='News news-item-page'>
				<h3 className='section-title'>{news.title}</h3>
				<div className='container item-news'>
					<div className='location'>
						<Link className='active-link' href='/'>
							HOME
						</Link>{' '}
						/{' '}
						<Link className='active-link' href='/news'>
							NEWS
						</Link>{' '}
						/ <small className='current-page'>{news.title.toLowerCase().replace(/\s+/g, '-')}</small>
					</div>
					<div className='News--item'>
						<div style={{backgroundImage: `url('${news.poster}')`}} className='News__image'>
							<span className='date'>{news.date}</span>
						</div>
						<div className='News__details'>
							<p className='text'>{news.fullText}</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
