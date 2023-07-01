import logo from './logo.svg';
import "./css/style.css";

// swiper
import{ Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import require module
import {Pagination} from "swiper";
 
function App() {
  return (
    <div className='bg-neutral-950 min-h-screen flex justify-center items-center p-20 px-72'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ 
          clickable: true,
         }}
        loop={true}
        modules={[Pagination]}
        className='mySwiper text-white h-[32rem] cursor-pointer'
      >
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet1.jpg"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet2.jpg"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet3.jpg"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet4.jpg"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet5.jpg"}></img> 
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet6.jpg"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet7.jpg"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={process.env.PUBLIC_URL + "/img/planet8.jpg"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
