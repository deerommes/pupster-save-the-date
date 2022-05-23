import React from 'react';

const List = ({ events }) => {
	return (
		<>
			{events.map((event) => {
				const { id, title, date, image } = event;
				return (
					<article key={id} className="event">
						<img src={image} alt={title} />
						<div>
							<h4>{title}</h4>
							<p>{date}</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
