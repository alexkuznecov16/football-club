import Image from 'next/image';
import './about.css';

import champions from '../../Assets/champions.png';
import fans from '../../Assets/fans.png';

const About = ({section}) => {
	return !section ? (
		<div className='About'>
			<h3 className='section-title'>ABOUT CLUB</h3>
			<div data-aos='fade-up' className='About__inner'>
				<div className='About-item'>
					<div className='image__container'>
						<Image src={champions} alt='img1' quality={100} priority={true} />
					</div>
					<div className='image__container'>
						<Image src={fans} alt='img2' quality={100} priority={true} />
					</div>
				</div>
				<div className='About-item'>
					<p>
						<b>FK Spartak</b> is a Latvian football club from Jurmala City. Club was founded in 2007. Currently is playing in the Latvian Higher Football League named &quot;OPTIBET Virslīga&quot;. FK Spartak is two-time Latvian champions.
					</p>
					<br />
					<br />
					<b>HISTORY</b>
					<br />
					<br />
					<p>
						In club first season, &quot;Spartaks&quot; won the 2nd league. In the 2011 season, it took 2nd place in the 1st league and entered &quot;Virslīga&quot;. In the first season in &quot;Virslīga&quot; club played very confidently but finished in 5th place after several leaders. In 2016 &quot;Spartaks&quot; became champions title. The title was won one round before winning the
						FK &quot;RFS&quot; at the Arkādija Stadium. In the 2017 season, club repeated the success - one round before the end of the tournament after the victory over FK &quot;Liepāja/MOGO&quot; club won the second title.
						<br />
						<br />
						Starting from 2015 FK &quot;Spartaks&quot; represents Latvia in official UEFA tournaments. Over five years club has played 14 games against teams from Montenegro, Serbia, Belarus, Kazakhstan, San Marino and Lithuania.
					</p>
				</div>
			</div>
		</div>
	) : (
		<div style={{padding: '130px 0'}} className='About'>
			<h3 className='section-title'>ABOUT CLUB</h3>
			<div className='About__inner'>
				<div className='About-item'>
					<div className='image__container'>
						<Image src={champions} alt='img1'></Image>
					</div>
					<div className='image__container'>
						<Image src={fans} alt='img2'></Image>
					</div>
				</div>
				<div className='About-item'>
					<p>
						<b>FK Spartak</b> is a Latvian football club from Jurmala City. Club was founded in 2007. Currently is playing in the Latvian Higher Football League named &quot;OPTIBET Virslīga&quot;. FK Spartak is two-time Latvian champions.
					</p>
					<br />
					<br />
					<b>HISTORY</b>
					<br />
					<br />
					<p>
						In club first season, &quot;Spartaks&quot; won the 2nd league. In the 2011 season, it took 2nd place in the 1st league and entered &quot;Virslīga&quot;. In the first season in &quot;Virslīga&quot; club played very confidently but finished in 5th place after several leaders. In 2016 &quot;Spartaks&quot; became champions title. The title was won one round before winning the
						FK &quot;RFS&quot; at the Arkādija Stadium. In the 2017 season, club repeated the success - one round before the end of the tournament after the victory over FK &quot;Liepāja/MOGO&quot; club won the second title.
						<br />
						<br />
						Starting from 2015 FK &quot;Spartaks&quot; represents Latvia in official UEFA tournaments. Over five years club has played 14 games against teams from Montenegro, Serbia, Belarus, Kazakhstan, San Marino and Lithuania.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
