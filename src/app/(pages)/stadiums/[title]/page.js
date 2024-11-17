import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';
import Image from 'next/image';
import Link from 'next/link';
import stadiumsData from '../../../data/stadiums.json';

import '../stadiums.css';
import NotFound from '@/app/not-found';

export default function StadiumDetail({params}) {
	const title = params.title;

	const stadium = stadiumsData.find(item => item.title.toLowerCase().replace(/\s+/g, '-') === title) || false;

	return stadium ? (
		<div className='mainPage'>
			<Header section={true} />
			<section className='stadiums'>
				<h2 className='section-title'>STADIUMS</h2>
				<div className='container'>
					<div className='stadiums__inner'>
						<div className='stadium--item active-stadium'>
							<Link className='stadium--image-link' href={`/stadiums/${stadium.title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
								<Image width={200} height={200} src={stadium.image} alt={stadium.title} quality={100} priority={true} />
							</Link>
							<div className='stadium__info'>
								<p>{stadium.info}</p>
								<span>{stadium.address}</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	) : (
		<NotFound />
	);
}
