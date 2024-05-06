import Footer from '@/app/Components/footer/Footer';
import Gallery from '@/app/Components/gallery/Gallery';
import Header from '@/app/Components/header/Header';

export default function page() {
	return (
		<>
			<Header section={true} />
			<Gallery section={true} />
			<Footer />
		</>
	);
}
