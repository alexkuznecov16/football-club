import Link from 'next/link';
import Image from 'next/image';
import './footer.css';

// import instagram from '/instagram-white-icon.png';
// import telegram from '/telegram-white-icon.png';
// import youtube from '/youtube-app-white-icon.png';

const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='container'>
				<div className='Footer__inner'>
					<div className='Footer--top'>
						<div className='Footer--top__name'>FK SPARTAKS Jūrmala</div>
						<div className='Footer--top__nav'>
							<Link href={'/'}>HOME</Link>
							<Link href={'/contacts'}>CONTACTS</Link>
						</div>
					</div>
					<div className='Footer--bottom'>
						<div className='Footer--bottom__copyright'>Copyright &copy; {new Date().getFullYear()} All rights reserved </div>
						<div className='Footer--bottom__socials'>
							<Link target='_blank' href={'https://www.instagram.com'}>
								<Image width={30} height={30} alt='instagram' src={'/instagram-white-icon.png'}></Image>
							</Link>
							<Link target='_blank' href={'https://www.telegram.com'}>
								<Image width={30} height={30} alt='telegram' src={'/telegram-white-icon.png'}></Image>
							</Link>
							<Link target='_blank' href={'https://www.youtube.com'}>
								<Image width={30} height={30} alt='youtube' src={'/youtube-app-white-icon.png'}></Image>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
