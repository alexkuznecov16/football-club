'use client';
import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';

import Image from 'next/image';

import playersData from '@/app/data/players.json';

import './players.css';
import {useState} from 'react';
import Link from 'next/link';

export default function Players() {
	const [players, setPlayers] = useState(playersData);
	return (
		<div className='mainPage'>
			<Header section={true} />
			<section className='players'>
				<h2 className='section-title'>PLAYERS</h2>
				<div className='container'>
					<div className='players__inner'>
						{players.map(player => (
							<PlayersCard key={player.name} player={player} />
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

const PlayersCard = ({player}) => {
	return player.onLoan ? (
		''
	) : (
		<div className='player--item'>
			<Image width={300} height={300} src={player.image} className='player__img' alt={`${player.name} ${player.surname}`}></Image>
			<div className='player__info'>
				<h3 className='player--details'>
					#{player.number} {player.name} {player.surname}
				</h3>
				<h4 className='player--details'>
					{player.dateOfBirth} | {player.growth}cm | {player.nationality}
				</h4>
				<div className='player__socials'>
					{player.socials.map((social, index) => (
						<Link key={index} href={social[0]} target='_blank' rel='noopener noreferrer'>
							<Image width={30} height={30} src={social[1]} alt={social[3]}></Image>
						</Link>
					))}
				</div>
				<span>{player.position}</span>
			</div>
		</div>
	);
};
