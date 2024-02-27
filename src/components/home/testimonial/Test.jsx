import React from 'react'
import Title from '../../common/title/Title'
import { testimonal } from '../../../dummydata'
import "./Test.css"

const Testimonial = () => {
  return (
	<>
	  <div className="testimonal padding">
		<div className="container">
			<Title subtitle={"Testimonial"} title={"Our  successful Students "} />
			<div className="content grid2">
				{testimonal.map((val)=>(
					<div className="items shadow">
						<div className="box flex">
							<div className="img">
								<img src={val.cover} alt="" />
								<i class="fa-solid fa-quote-left icon"></i>
							</div>
							<div className="name">
								<h2>{val.name}</h2>
								<span>{val.post}</span>
							</div>
						</div>
						<p>{val.desc}</p>
					</div>
				))}

			</div>
		</div>
	  </div>
	</>
  )
}

export default Testimonial
