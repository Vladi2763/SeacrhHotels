import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const Carousel = () => {

	const images = useSelector((state) => state.carousel)
	return (
		<Swiper
			spaceBetween={12}
			slidesPerView={3.5}
			loop={true}
		>
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<img src={image} alt='carousel'/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;

