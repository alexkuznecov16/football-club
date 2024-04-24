import Link from 'next/link';
import Image from 'next/image';
import './footer.css';

import instagram from '../Assets/instagram-white-icon.png';
import telegram from '../Assets/telegram-white-icon.png';
import youtube from '../Assets/youtube-app-white-icon.png';

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
						<div className='Footer--bottom__copyright'>Copyright &copy; 2024 All rights reserved </div>
						<div className='Footer--bottom__socials'>
							<Link href={'instagram'}>
								<Image alt='instagram' src={instagram}></Image>
							</Link>
							<Link href={'telegram'}>
								<Image alt='telegram' src={telegram}></Image>
							</Link>
							<Link href={'youtube'}>
								<Image alt='youtube' src={youtube}></Image>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
