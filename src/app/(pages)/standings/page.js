import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';
import Standings from '@/app/Components/standings/Standings';

export default function StandingsSection() {
	return (
		<div className='mainPage'>
			<Header section={true} />
			<Standings section={true} />
			<Footer />
		</div>
	);
}
