import { useSelector } from 'react-redux';
import { Carousel } from '@trendyol-js/react-carousel';
import classes from './Carousel.module.css'


export const Carouse = () => {

	require('react-dom');
	window.React2 = require('react');
	console.log(window.React1 === window.React2);

	const images = useSelector((state) => state.carousel);

	console.log(images);

	return (<Carousel show={3.25} slide={2} swiping={true} rightArrow={''} leftArrow={''}>
		{images.map((img, index) => (
			<img className={classes.image} src={img} key={index}></img>
		))}

	</Carousel>)
}

