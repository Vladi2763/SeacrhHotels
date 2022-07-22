import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';

ReactDOM.render(
	<Carousel show={3} slide={1}>
		 <div>1</div>
     <div>2</div>
     <div>312111</div>
	</Carousel>,
	document.getElementById('carousel'),
);