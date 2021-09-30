import React from 'react';
import Card from './Card';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image4.jpg';
import image3 from '../assets/linkedin.png';

const cards = [
	{
		id: 1,
		title: 'Daniel Web',
		image: image1,
		text: 'Acá encontraras mi página de facebook, donde subo contenido sobre programación.',
		url: 'https://www.facebook.com/BrandJS',
	},
	{
		id: 1,
		title: 'Daniel Repositorio',
		image: image2,
		text: 'Acá encontraras mi repositorio de github, donde subo mis proyectos y tareas de programación.',
		url: 'https://github.com/DaaanielM',
	},
	{
		id: 1,
		title: 'Daniel Linkedin',
		image: image3,
		text: 'Acá encontraras mi perfil profesional de Linkedin, donde puedes contactar conmigo para un trabajo.',
		url: 'https://www.linkedin.com/in/daniel-jos%C3%A9-brand-monje-000602200/',
	},
];

console.log(cards);

const Cards = () => {
	return (
		<div className='container d-flex justify-content-center align-items-center h-100 text-justify'>
			<div className='row'>
				{cards.map((card) => (
					<div key={card.id} className='col-md-4'>
						<Card
							title={card.title}
							image={card.image}
							text={card.text}
							url={card.url}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;
