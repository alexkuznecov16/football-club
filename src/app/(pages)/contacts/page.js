'use client';

import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';

import {HiOutlineMail} from 'react-icons/hi';

import './contacts.css';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';

export default function page() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = e => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};
	return (
		<>
			<Header section={true} />
			<section style={{justifyContent: 'start', padding: '100px 0'}} className='Contacts'>
				<iframe
					style={{width: '100%', height: '300px'}}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.953858736196!2d23.607608776521445!3d56.94959179918228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eee6d4a74bd5c1%3A0x7a2fcceb384791ec!2z0K7RgNC80LDQu9GM0YHQutC40Lkg0LPQvtGA0L7QtNGB0LrQvtC5INGB0YLQsNC00LjQvtC9INCh0LvQvtC60LA!5e0!3m2!1sru!2slv!4v1715271692880!5m2!1sru!2slv'
					loading='lazy'
				></iframe>
				<h3 style={{paddingTop: '30px'}} className='section-title'>
					CONTACTS
				</h3>
				<div style={{paddingTop: '30px'}} className='container'>
					<div className='Contacts__inner'>
						<div className='Contacts__text'>
							<address>Nometņu iela 24, Jūrmala, LV-2016, Latvija</address>
							<Link href={'mailto:test@gmail.com'}>
								<HiOutlineMail /> test@gmail.com
							</Link>
							<div className='socials-contacts'>
								<Link href={'#'}>
									<Image width={50} height={50} src={'/facebook-7-256.png'} alt='facebook'></Image>
								</Link>
								<Link href={'#'}>
									<Image width={50} height={50} src={'/twitter-256.png'} alt='twitter'></Image>
								</Link>
								<Link href={'#'}>
									<Image width={50} height={50} src={'/instagram-white-icon.png'} alt='instagram'></Image>
								</Link>
							</div>
						</div>
						<form onSubmit={handleSubmit} className='Contacts__form' action='#'>
							<div className='form-group'>
								<label htmlFor='name'>Name:</label>
								<input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
							</div>
							<div className='form-group'>
								<label htmlFor='email'>Email:</label>
								<input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
							</div>
							<div className='form-group'>
								<label htmlFor='message'>Message:</label>
								<textarea id='message' name='message' value={formData.message} onChange={handleChange} required />
							</div>
							<button type='submit'>CONTACTS US</button>
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
