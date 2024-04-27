import {TbBallFootballOff} from 'react-icons/tb';
import {TbBallFootball} from 'react-icons/tb';
import {IoIdCardSharp} from 'react-icons/io5';
import './Statistics.css';
import CountUp from 'react-countup';
// import {useEffect, useState} from 'react';
const Statistics = () => {
	// const goalsScored = 88;
	// const goalsConceded = 24;
	// const yellowCards = 72;
	// const redCards = 12;

	// const [animGoals, setAnimGoals] = useState(0);
	// const [animConceded, setAnimConceded] = useState(0);
	// const [animYellowCards, setAnimYellowCards] = useState(0);
	// const [animRedCards, setAnimRedCards] = useState(0);

	// useEffect(() => {
	// 	const goalTimer = setTimeout(() => {
	// 		if (animGoals < goalsScored) {
	// 			setAnimGoals(animGoals + 1);
	// 		}
	// 	}, 100);

	// 	const concededTimer = setTimeout(() => {
	// 		if (animConceded < goalsConceded) {
	// 			setAnimConceded(animConceded + 1);
	// 		}
	// 	}, 100);

	// 	const yellowCardsTimer = setTimeout(() => {
	// 		if (animYellowCards < yellowCards) {
	// 			setAnimYellowCards(animYellowCards + 1);
	// 		}
	// 	}, 100);

	// 	const redCardsTimer = setTimeout(() => {
	// 		if (animRedCards < redCards) {
	// 			setAnimRedCards(animRedCards + 1);
	// 		}
	// 	}, 100);

	// 	return () => {
	// 		clearTimeout(goalTimer);
	// 		clearTimeout(concededTimer);
	// 		clearTimeout(yellowCardsTimer);
	// 		clearTimeout(redCardsTimer);
	// 	};
	// }, [animGoals, goalsScored, animConceded, goalsConceded, animYellowCards, yellowCards, animRedCards, redCards]);

	return (
		<div data-aos='fade-up' className='Statistics'>
			<h3 className='section-title'>STATISTICS</h3>
			<div className='container'>
				<div className='Statistics__inner'>
					<div className='Statistics-item'>
						<TbBallFootball stroke='green' />
						<CountUp start={0} end={88} duration={10} delay={0} className='count' />
						<p>GOALS SCORED</p>
					</div>
					<div className='Statistics-item'>
						<TbBallFootballOff stroke='darkred' />
						<CountUp start={0} end={24} duration={10} delay={0} className='count' />
						<p>GOALS CONCEDED</p>
					</div>
					<div className='Statistics-item'>
						<IoIdCardSharp stroke='#ffb400' fill='#ffb400' />
						<CountUp start={0} end={45} duration={10} delay={0} className='count' />
						<p>YELLOW CARDS</p>
					</div>
					<div className='Statistics-item'>
						<IoIdCardSharp stroke='red' fill='red' />
						<CountUp start={0} end={7} duration={10} delay={0} className='count' />
						<p>RED CARDS</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
