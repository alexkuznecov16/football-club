'use client';

import './hero.css';
import {useEffect, useRef} from 'react';

const Hero = () => {
	const textBlockRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = e => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			const rotateX = (mouseY / windowHeight - 0.5) * 30;
			const rotateY = (mouseX / windowWidth - 0.5) * 30;
			textBlockRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<main className='HeroBlock'>
			<div className='img-block'></div>
			<div className='text-block'>
				<h2 ref={textBlockRef}>#FKSPARTAKS</h2>
				<span>FOLLOW YOUR DREAM</span>
			</div>
		</main>
	);
};

export default Hero;
