'use client';
import {HiOutlineMail} from 'react-icons/hi';
// import {IoLanguage} from 'react-icons/io5';
import {MdArrowDropDown} from 'react-icons/md';
import {IoMdCloseCircle} from 'react-icons/io';
import {IoMenu} from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';

import logo from '../../Assets/spartaks-logo.svg';
// import russia from '../../Assets/russia.png';
// import usa from '../../Assets/usa.png';

import {useState, useEffect} from 'react';

const Header = ({isAbsolute}) => {
	const [isScrolled, setScrolled] = useState(false);
	const [isMobileSize, setMobileSize] = useState(false);
	const [isMobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 5;
			setScrolled(scrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1160) {
				setMobileSize(true);
			} else {
				setMobileSize(false);
			}
		};

		handleResize(); // Проверяем при загрузке страницы

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Локальное состояние для отслеживания открытого блока ссылок
	const [openMenu, setOpenMenu] = useState(null);

	// Функция для открытия/закрытия блока ссылок
	const handleMenuToggle = index => {
		setOpenMenu(openMenu === index ? null : index);
	};

	return (
		<body className={isMobileOpen ? 'hide' : ''}>
			<header style={isMobileSize ? {width: '100%', top: 0, left: 0, transform: 'none'} : {}} className={`${isAbsolute ? 'absolute-header' : ''} headerBlock ${isScrolled ? 'scroll' : ''}`}>
				{isMobileSize ? (
					<>
						<div className={`mobile ${isMobileOpen ? 'open' : ''}`}>
							<Image alt='FK Spartaks logo' src={logo}></Image>
							<nav className='navigation'>
								<ul className='all-navs'>
									<li className='nav-item'>
										<Link href='/'>HOME</Link>
									</li>
									<li className={`nav-item open-more ${openMenu === 1 ? 'active' : ''}`} onClick={() => handleMenuToggle(1)}>
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
												<Link href='/statistics'>Statistics</Link>
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
									<li className={`nav-item open-more ${openMenu === 2 ? 'active' : ''}`} onClick={() => handleMenuToggle(2)}>
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
											<li>
												<Link href='/fans'>Fans</Link>
											</li>
										</ul>
									</li>
									<li className={`nav-item open-more ${openMenu === 3 ? 'active' : ''}`} onClick={() => handleMenuToggle(3)}>
										<Link href='/#'>
											More <MdArrowDropDown />
										</Link>
										<ul>
											<li>
												<Link href='/gallery'>Gallery</Link>
											</li>
											<li>
												<Link href='/championship'>Championship</Link>
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
									{/* Планируется создание переводчика страницы на русский и английский языки */}
									{/* <li>
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
						</li> */}
								</ul>
							</nav>
							<IoMdCloseCircle className='close-menu' onClick={() => setMobileOpen(false)} />
						</div>
						<IoMenu className='open-menu' onClick={() => setMobileOpen(true)} />
					</>
				) : (
					<>
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
											<Link href='/statistics'>Statistics</Link>
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
										<li>
											<Link href='/fans'>Fans</Link>
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
											<Link href='/championship'>Championship</Link>
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
								{/* Планируется создание переводчика страницы на русский и английский языки */}
								{/* <li>
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
							</li> */}
							</ul>
						</nav>
					</>
				)}
			</header>
		</body>
	);
};

export default Header;
