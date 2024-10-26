import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import { experiences, skills } from '/src/constants'

import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='text-gray-500 font-semibold drop-shadow'>
          {" "}
          Vishal
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in India, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='text-3xl font-semibold text-slate-300'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex '>
          <VerticalTimeline lineColor='#818181' >
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                 iconStyle={{ visibility: "hidden" }}
                //  iconStyle={{ background: experience.iconBg }}
                // icon={
                //   <div className='flex justify-center items-center w-full h-full'>
                //     <img
                //       src={experience.icon}
                //       alt={experience.company_name}
                //       className='w-[60%] h-[100%] object-contain'
                //     />
                //   </div>
                // }
                contentStyle={{
                  background: "#313131",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  
                }}
              >
                <div>
                  <h3 className='text-white text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-slate-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-slate-500 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-500' />

      <CTA />
    </section>
  );
};

export default About;
