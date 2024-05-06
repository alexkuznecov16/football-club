import Header from '@/app/Components/header/Header';
import Footer from '@/app/Components/footer/Footer';

const NotFound = () => {
	return (
		<body>
			<Header />
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '130px'}}>
				<h2>Page not be found</h2>
				<p>Could not find requested resource</p>
			</div>
			<Footer />
		</body>
	);
};

export default NotFound;
