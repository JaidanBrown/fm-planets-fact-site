import React from 'react'
import data from '../data.json'

const Header = () => {
	return (
		<header>
			<div className='header-inner'>
				<div className='header-left'>
					<h2 className='title'>The Planets</h2>
				</div>
				<div className='header-right'>
					<ul>
						{data.map((item, i) => {
							return (
								<li className='nav-item' key={i}>
									<h4>{item.name}</h4>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
