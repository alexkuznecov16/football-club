import About from '@/app/Components/about/About';
import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';

export default function StandingsSection() {
	return (
		<div className='mainPage'>
			<Header section={true} />
			<About section={true} />
			<Footer />
		</div>
	);
}
