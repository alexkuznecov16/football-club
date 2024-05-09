'use client';
import {useEffect, useState} from 'react';
import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';
import ticketsData from '@/app/data/tickets.json';

import Image from 'next/image';
import Link from 'next/link';

import './tickets.css';

export default function Tickets() {
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		const filteredTickets = ticketsData.filter(ticket => {
			const currentDate = new Date();
			const ticketDate = new Date(ticket.date);
			return ticket.active && currentDate < ticketDate;
		});
		setTickets(filteredTickets);
	}, []);

	return (
		<div className='mainPage'>
			<Header isAbsolute={false} />
			<section className='tickets'>
				<h2 className='section-title'>TICKETS</h2>
				<div className='container'>
					<div className='tickets__inner'>
						{tickets.length === 0 ? (
							<p>No tickets available at the moment.</p>
						) : (
							<>
								{tickets.map(ticket => (
									<TicketCard key={ticket.opponent} ticket={ticket} />
								))}
							</>
						)}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

const TicketCard = ({ticket}) => {
	const currentDate = new Date();
	const ticketDate = new Date(ticket.date);
	const isDatePassed = currentDate > ticketDate;
	return ticket.active && !isDatePassed ? (
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
