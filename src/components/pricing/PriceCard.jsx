import React from 'react'
import { price } from '../../dummydata'
import './Price.css'

const PriceCard = () => {
  return (
	<>
	{price.map((val)=>(
		<div className="items shadow">
			<h4>{val.name}</h4>
			<h1>
				<span>$</span>
				{val.price}
			</h1>
			<p>{val.desc}</p>
			<buttom className='outline-btn'>
				GET STARTED
			</buttom>

		</div>
	))}
	  
	</>
  )
}

export default PriceCard
