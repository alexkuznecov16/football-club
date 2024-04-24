'use client';

import Link from 'next/link';
import {useState, useEffect} from 'react';
import './matchcountdown.css';
import matchesData from '../matches.json';

const MatchCountdown = () => {
	const [matches, setMatches] = useState(matchesData);

	let [days, setDays] = useState(0);
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	let [seconds, setSeconds] = useState(0);
	let [i, setI] = useState(0);
	let [matchIsStarted, setMatchIsStarted] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			const dateEnd = new Date(`${matches[i].date}T${matches[i].time}`);
			const dateNow = new Date();
			const dateDif = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

			if (dateDif <= 0) {
				setMatchIsStarted(true);
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);

				if (dateNow.getTime() - dateEnd.getTime() >= 3 * 60 * 60 * 1000) {
					const nextMatchIndex = i + 1;
					if (nextMatchIndex < matches.length) {
						setMatchIsStarted(false);
						setI(nextMatchIndex);
					} else {
						clearInterval(interval);
					}
				}
			} else {
				setDays(Math.floor(dateDif / (24 * 60 * 60)));
				setHours(Math.floor(dateDif / (60 * 60)) % 24);
				setMinutes(Math.floor(dateDif / 60) % 60);
				setSeconds(Math.floor(dateDif) % 60);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [matches, i]);

	return (
		<div className='MatchCountdown'>
			<h3 className='section-title'>COUNTDOWN TO NEXT GAME</h3>
			<div className='info'>
				<div className='countdown'>
					<div className='timer'>
						<div className='timer-up'>
							<h2 id='days'>{days < 10 ? '0' + days : days}</h2>
						</div>
						<div className='timer-down'>
							<p>Days</p>
						</div>
					</div>
					<span>:</span>
					<div className='timer'>
						<div className='timer-up'>
							<h2 id='hours'>{hours < 10 ? '0' + hours : hours}</h2>
						</div>
						<div className='timer-down'>
							<p>Hours</p>
						</div>
					</div>
					<span>:</span>
					<div className='timer'>
						<div className='timer-up'>
							<h2 id='minutes'>{minutes < 10 ? '0' + minutes : minutes}</h2>
						</div>
						<div className='timer-down'>
							<p>Minutes</p>
						</div>
					</div>
					<span>:</span>
					<div className='timer'>
						<div className='timer-up'>
							<h2 id='seconds'>{seconds < 10 ? '0' + seconds : seconds}</h2>
						</div>
						<div className='timer-down'>
							<p>Seconds</p>
						</div>
					</div>
				</div>
				{matchIsStarted ? (
					<div>
						<Link style={{color: 'red'}} href='###'>
							Click to see match LIVE
						</Link>
					</div>
				) : (
					''
				)}
				{matches[i].isHome ? (
					<div>
						<p style={{color: '#000', textAlign: 'center'}}>
							FK Spartaks VS {matches[i].opponent} | {matches[i].date} | {matches[i].time} | {matches[i].stadium} | {matches[i].championship}
						</p>
					</div>
				) : (
					<div>
						<p style={{color: '#000', textAlign: 'center'}}>
							{matches[i].opponent} VS FK Spartaks | {matches[i].date} | {matches[i].time} | {matches[i].stadium} | {matches[i].championship}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default MatchCountdown;
