import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [events, setEvents] = useState(data);
	return (
		<main>
			<section className="container">
				<h3>{events.length} Events</h3>
				<List events={events} t />
				<button onClick={() => setEvents([])}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
