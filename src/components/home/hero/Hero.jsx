import React from 'react';
import Title from '../../common/title/Title';
import './Hero.css';

const Hero = () => {

  return (
	<>
		<section className="hero">
			<div className="container">
				<div className="row">
					<Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque corrupti architecto quia animi in aspernatur porro saepe. Quas quo ipsa accusantium sit deleniti officia illum itaque architecto quia sunt!</p>
					<div className="button">
						<button className="primary-btn">
							GERT STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
						</button>
						<button className="primary-btn">
							VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
						</button>
					</div>
				</div>
			</div>
		</section>
		<div className="margin">

		</div>
	</>
  )
}

export default Hero