'use client';
import {useState, useEffect} from 'react';
import photoData from '../gallery.json';
import Link from 'next/link';

import './gallery.css';

const Gallery = () => {
	const [selectedPhotos, setSelectedPhotos] = useState([]);
	const [activeButton, setActiveButton] = useState(null);

	const handleTeamSelect = team => {
		const selectedTeamPhotos = photoData.find(item => item.team === team)?.photos || [];
		setSelectedPhotos(selectedTeamPhotos);
		setActiveButton(team);
	};

	useEffect(() => {
		// При загрузке страницы выбираем последнее значение team
		const lastTeam = photoData[photoData.length - 1].team;
		handleTeamSelect(lastTeam);
	}, []);

	const reversedPhotoData = [...photoData].reverse();

	return (
		<div className='Gallery'>
			<h3 className='section-title'>GALLERY</h3>
			<div data-aos='fade-up' className='Gallery__container'>
				<div className='Gallery__buttons'>
					{reversedPhotoData.map((item, index) => (
						<button className={activeButton === item.team ? 'active' : ''} type='button' key={index} onClick={() => handleTeamSelect(item.team)}>
							{item.team}
						</button>
					))}
				</div>
				<div className='Gallery__inner'>
					{selectedPhotos.map((photo, index) => (
						<Link className='img-container' key={index} href={photo}>
							<img src={photo} alt={`Photo ${index + 1}`} />
							{/* <div className='img-overlay'>
								<CiZoomIn />
							</div> */}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
