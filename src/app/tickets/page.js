'use client';
import {useState} from 'react';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import ticketsData from '../data/tickets.json';

import Image from 'next/image';
import Link from 'next/link';

import './tickets.css';

export default function Tickets() {
	const [tickets, setTickets] = useState(ticketsData);

	return (
		<div className='mainPage'>
			<Header isAbsolute={false} />
			<section className='tickets'>
				<h2 className='section-title'>TICKETS</h2>
				<div className='container'>
					<div className='tickets__inner'>
						{tickets.map(ticket => (
							<TicketCard key={ticket.opponent} ticket={ticket} />
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

const TicketCard = ({ticket}) => {
	return ticket.active ? (
		<div className='ticket'>
			<div className='ticket__image'>
				<Image width={200} height={300} src={ticket.poster} alt={ticket.opponent}></Image>
			</div>
			<div className='ticket__content'>
				<h3>{ticket.opponent}</h3>
				<p>Date: {ticket.date}</p>
				<p>Time: {ticket.time}</p>
				<p>Stadium: {ticket.stadium}</p>
				<p>Standing: {ticket.championship}</p>
				{ticket.active ? (
					<Link href={`${ticket.ticketLink}`} target='_blank' rel='noopener noreferrer' className='ticket__link'>
						Buy tickets
					</Link>
				) : (
					<p className='ticket__unavailable'>Tickets are unavailable</p>
				)}
			</div>
		</div>
	) : (
		''
	);
};
