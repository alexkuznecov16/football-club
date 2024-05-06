import Footer from '@/app/Components/footer/Footer';
import Header from '@/app/Components/header/Header';
import Statistics from '@/app/Components/statistics/Statistics';

export default function StandingsSection() {
	return (
		<div className='mainPage'>
			<Header section={true} />
			<Statistics section={true} />
			<Footer />
		</div>
	);
}
