import { Html } from "@react-three/drei";
import { Link } from "react-router-dom";
import {arrow} from '/public/icons'


const TextBlock = ({ currentStage, ...props }) => {
  if (currentStage === 1)
    return (
      <Html position={0,0,1}>

      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-black  py-4 px-8 text-white mx-5 '>
        LIMITS
        
        <a href="/" className="neo-brutalism-white neo-btn">
          <img src={arrow} alt="arrow" className="w-4 h-4 object-center" />
        </a>

      </h1>



      </Html>
    );

  if (currentStage === 2) {
    return (
      <Html position={0,0,-2}>
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-black  px-8 text-white mx-5'>
        WITHOUT
       
      </h1>
      </Html>
    );
  }

  if (currentStage === 3) {
    return (
      <Html position={[-4,0,2]}>
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-black py-4 px-8 text-white mx-5'>
        DYNAMIC
      </h1>
      </Html>
    );
  }

  if (currentStage === 4) {
    return (
      <Html>
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-black py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Adrian</span>
        👋
        <br />
        A Software Engineer from Croatia 🇭🇷
      </h1>
      </Html>
    );
  }

  return null;
};

export default TextBlock;
