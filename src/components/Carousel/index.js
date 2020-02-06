import Carousel from "./Carousel"
const CarouselPlugin = {
	install(Vue, options){
		Vue.component("Carousel",Carousel);
	}
}
export default CarouselPlugin;
