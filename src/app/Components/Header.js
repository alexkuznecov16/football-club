'use client';

import {HiOutlineMail} from 'react-icons/hi';
import {IoLanguage} from 'react-icons/io5';
import {MdArrowDropDown} from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';

import logo from '../Assets/spartaks-logo.svg';
import russia from '../Assets/russia.png';
import usa from '../Assets/usa.png';

import {useState, useEffect} from 'react';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 5;
			setIsScrolled(scrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<header className={`headerBlock ${isScrolled ? 'scroll' : ''}`}>
			<Link href='www.google.com'>
				<Image className='logo' src={logo} alt='Spartaks logo' />
			</Link>
			<nav className='navigation'>
				<ul>
					<li>
						<Link href='/'>HOME</Link>
					</li>
					<li>
						<Link href='/#'>
							CLUB <MdArrowDropDown />
						</Link>
						<ul>
							<li>
								<Link href='/stadium'>Stadium</Link>
							</li>
							<li>
								<Link href='/standings'>Standings</Link>
							</li>
							<li>
								<Link href='/statistics'>Statistics 2022</Link>
							</li>
							<li>
								<Link href='/about'>About club</Link>
							</li>
							<li>
								<Link href='/news'>News</Link>
							</li>
							<li>
								<Link href='/tickets'>Tickets</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='/#'>
							TEAM <MdArrowDropDown />
						</Link>
						<ul>
							<li>
								<Link href='/players'>Players</Link>
							</li>
							<li>
								<Link href='/coaching-staff'>Coaching staff</Link>
							</li>
							<li>
								<Link href='/players-on-loan'>Players on loan</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='/#'>
							More <MdArrowDropDown />
						</Link>
						<ul>
							<li>
								<Link href='/gallery'>Gallery</Link>
							</li>
							<li>
								<Link href='/optibet-virsliga'>Optibet virsliga</Link>
							</li>
							<li>
								<Link href='/history'>History</Link>
							</li>
							<li>
								<Link href='/socials'>Social media</Link>
							</li>
							<li>
								<Link href='/contacts'>Contacts</Link>
							</li>
						</ul>
					</li>
					<li title='Send email'>
						<Link href='mailto:###'>
							<HiOutlineMail />
						</Link>
					</li>
					<li>
						<Link title='Switch language' href='/#'>
							<IoLanguage />
						</Link>
						<ul>
							<li>
								<Link href='#'>
									English <Image alt='USA' src={usa}></Image>
								</Link>
							</li>
							<li>
								<Link href='#'>
									Русский <Image alt='Russia' src={russia}></Image>
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
