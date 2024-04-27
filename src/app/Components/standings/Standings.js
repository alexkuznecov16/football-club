'use client';

import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './standings.css';
import Image from 'next/image';
import Link from 'next/link';

import virsliga from '../../Assets/virsliga.png';
import latvian_cup from '../../Assets/latvian-cup.png';
import livonian_cup from '../../Assets/livonian-cup.jpg';

const Standings = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
	});
	return (
		<div className='Standings'>
			<h3 className='section-title'>STANDINGS</h3>
			<div data-aos='fade-up' className='Standings-container'>
				<div ref={sliderRef} className='keen-slider'>
					<div className='keen-slider__slide slide number-slide1'>
						<div>
							<Link target='_blank' href='https://lff.lv/sacensibas/viriesi/virsliga/?p=2022'>
								<Image alt='virsliga' src={virsliga}></Image>
							</Link>
						</div>
						<span>Optibet virsliga</span>
					</div>
					<div className='keen-slider__slide slide number-slide2'>
						<div>
							<Link target='_blank' href='https://lff.lv/sacensibas/viriesi/latvijas-kauss/?p=2022'>
								<Image alt='latvian cup' src={latvian_cup}></Image>
							</Link>
						</div>
						<span>Latvian Cup</span>
					</div>
					<div className='keen-slider__slide slide number-slide4'>
						<div>
							<Link target='_blank' href='https://lff.lv/sacensibas/viriesi/livonian-winter-league/'>
								<Image alt='livonian cup' src={livonian_cup}></Image>
							</Link>
						</div>
						<span>Livonian Cup</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Standings;
