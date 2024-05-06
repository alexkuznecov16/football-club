'use client';
import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';
import './coachs.css';

import Image from 'next/image';

import coachsData from '@/app/data/coaching-staff.json';
import {useState} from 'react';
import Link from 'next/link';

export default function Coachs() {
	const [coachs, setCoachs] = useState(coachsData);
	return (
		<div className='mainPage'>
			<Header section={true} />
			<section className='coachs'>
				<h2 className='section-title'>COACHING STAFF</h2>
				<div className='container'>
					<div className='coachs__inner'>
						{coachs.map(coach => (
							<CoachCard key={coach.name} coach={coach} />
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

const CoachCard = ({coach}) => {
	return (
		<div className='coach--item'>
			<Image width={300} height={300} src={coach.image} className='coach__img' alt={`${coach.name} ${coach.surname}`}></Image>
			<div className='coach__info'>
				<h3 className='coach--details'>
					{coach.name} {coach.surname}
				</h3>
				<h4 className='coach--details'>
					{coach.dateOfBirth} | {coach.nationality}
				</h4>
				<div className='coach__socials'>
					{coach.socials.map((social, index) => (
						<Link key={index} href={social[0]} target='_blank' rel='noopener noreferrer'>
							<Image width={30} height={30} src={social[1]} alt={social[3]}></Image>
						</Link>
					))}
				</div>
				<span>{coach.role}</span>
			</div>
		</div>
	);
};
