import {TbBallFootballOff} from 'react-icons/tb';
import {TbBallFootball} from 'react-icons/tb';
import {IoIdCardSharp} from 'react-icons/io5';
import './Statistics.css';
const Statistics = () => {
	return (
		<div className='Statistics'>
			<h3 className='section-title'>STATISTICS 2022</h3>
			<div className='container'>
				<div className='Statistics__inner'>
					<div className='Statistics-item'>
						<TbBallFootball stroke='green' />
						<span className='count'>88</span>
						<p>GOALS SCORED</p>
					</div>
					<div className='Statistics-item'>
						<TbBallFootballOff stroke='darkred' />
						<span className='count'>88</span>
						<p>GOALS CONCEDED</p>
					</div>
					<div className='Statistics-item'>
						<IoIdCardSharp stroke='#ffb400' fill='#ffb400' />
						<span className='count'>88</span>
						<p>YELLOW CARDS</p>
					</div>
					<div className='Statistics-item'>
						<IoIdCardSharp stroke='red' fill='red' />
						<span className='count'>88</span>
						<p>RED CARDS</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
