'use client';
import {TbBallFootballOff} from 'react-icons/tb';
import {TbBallFootball} from 'react-icons/tb';
import {IoIdCardSharp} from 'react-icons/io5';
import './Statistics.css';
import CountUp from 'react-countup';
const Statistics = ({section}) => {
	return !section ? (
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
	) : (
		<div style={{padding: '130px 0'}} className='Statistics'>
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
