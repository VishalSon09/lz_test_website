import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      {/* <hr className='border-slate-200' /> */}
      <div className="bg-neutral-700 my-5 h-[1px] w-full" />

      <div className='footer-container '>
        <p className='font-semibold text-gray text-xs'>
          © 2024 <strong>LZ Inc</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain mr-3'
              />
            </Link>
          ))}
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
