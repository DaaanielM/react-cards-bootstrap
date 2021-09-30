import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
const Card = ({ title, image, text, url }) => {
	return (
		<div className='card text-center bg-dark'>
			<div className='overflow'>
				<img src={image} alt='' className='card-img-top' />
			</div>
			<div className='card-body text-light'>
				<h4 className='card-title'>{title}</h4>
				<p className='card-text text-secondary'>
					{text
						? text
						: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repellat sit ab et odit minus quis nesciunt, dolorum corporis, ipsum tempora omnis! Sed veritatis corporis consequuntur vero officia beatae eum iure. '}
				</p>
				<a
					target='_blank'
					href={url}
					className='btn btn-outline-secondary rounded-0'>
					Ir al sitio web
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
	image: PropTypes.string,
	text: PropTypes.string,
};

export default Card;
