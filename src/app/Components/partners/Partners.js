import Link from 'next/link';
import './partners.css';

const Partners = () => {
	return (
		<div className='Partners'>
			<h3 className='section-title'>PARTNERS</h3>
			<div data-aos='fade-up' className='container'>
				<div className='Partners__inner'>
					<div className='Partners--item'>
						<Link href={'https://www.amazon.com/'}></Link>
					</div>
					<div className='Partners--item'>
						<Link href={'https://www.nike.com/'}></Link>
					</div>
					<div className='Partners--item'>
						<Link href={'https://www.bmw.com/'}></Link>
					</div>
					<div className='Partners--item'>
						<Link href={'https://www.coca-cola.com/'}></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
