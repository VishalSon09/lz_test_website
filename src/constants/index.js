export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: 'About',
      href: '/about',
    },
    {
      id: 3,
      name: 'Work',
      href: '/projects',
    },
    {
      id: 4,
      name: 'I-phoneProject',
      href: '/iphoneProject',
    },
  ];

  export const boxProps = [
    { id:1, position: [2.25, -3.5, 0], rotation: [0, 0, Math.PI / 3.5], currentStage:1, },
    { id:2, position: [-2.5, -2.5, 0], rotation: [0, 0, Math.PI / 4], currentStage:2, },
    { id:3, position: [-3, 1, 0], rotation: [0, 0, Math.PI / 4], currentStage:3, },
  ];




//////////EXP AND SKILLS ////////////////////////////////////
  import { meta, shopify, starbucks, tesla, logo, vayavya } from '/public/images/exp'
  import {
      car,
      contact,
      css,
      estate,
      express,
      git,
      github,
      html,
      javascript,
      linkedin,
      mongodb,
      motion,
      mui,
      nextjs,
      nodejs,
      pricewise,
      react,
      redux,
      sass,
      snapgram,
      summiz,
      tailwindcss,
      threads,
      typescript,
      adobe,
      autodesk,
      blender,
      c,
      cplusplus,
      Mathworks,
      nuke,
      nvidia,
      postgresql,
      python,
      sfx_logo,
      unity,
      unrealengine,
      USDLogo
  } from '/public/icons'

//   import IPhoneProj from '/src/projectPages/iPhone/IPhoneProj.jsx'




  ///////////////    //////////////////////////////////  ////////////////////////////////
  export const skills = [
    {
        imageUrl: adobe,
        name: "Adobe",
        type: "Design",
    },
    {
        imageUrl: autodesk,
        name: "Autodesk",
        type: "Design",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "Design",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Script",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Script",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: Mathworks,
        name: "Mathworks",
        type: "Tech",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nuke,
        name: "Nuke",
        type: "Composition",
    },
    {
        imageUrl: nvidia,
        name: "Nvidia",
        type: "Tech",
    },
    {
        imageUrl: postgresql,
        name: "Sql",
        type: "Script",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Script",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: sfx_logo,
        name: "SideFX",
        type: "Tech",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Tech",
    },
    {
        imageUrl: unrealengine,
        name: "UE",
        type: "Tech",
    },
    {
        imageUrl: USDLogo,
        name: "USD",
        type: "Script",
    }
];

export const experiences = [
    {
        title: "Senior Software Engineer",
        company_name: "Vayvaya Labs",
        icon: vayavya,
        iconBg: "#accbe1",
        date: "2023-Present",
        points: [
            "Led a cross-functional team of engineers and VFX specialists to develop cutting-edge procedural city generation for autonomous vehicle simulations, resulting in a 20% improvement in ADAS Level 3 system accuracy.",
            "Generated ₹150 crore in new revenue by establishing strategic partnerships with industry leaders such as NVIDIA and Foretellix, driving business growth and securing long-term contracts.",
            "Pioneered the development of Houdini Digital Assets (HDAs) for synthetic data generation, optimizing asset throughput by 30% and significantly improving project delivery timelines.",
        ],
    },
    {
        title: "VFX Lead",
        company_name: "Double Barrel Films",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "2022-2023",
        points: [
            "Directed a team of 10 VFX artists, implementing a USD pipeline that reduced render times by 25% and improved visual quality for high-profile VFX productions.",
            "Engineered advanced mathematical solvers for dynamic simulations, driving product quality and increasing client satisfaction, resulting in repeat business worth ₹50 crore.",
            "Partnered with the C-suite to realign project goals with the company's strategic direction, directly contributing to a 15% increase in operational efficiency."
        ],
    },
    {
        title: "Houdini FX Artist",
        company_name: "Sky Dreamers Club",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "2021-2022",
        points: [
            "Collaborated with the creative and technical departments to deliver high-impact VFX solutions for global clients, leading to a 25% increase in customer satisfaction.",
            "Designed and executed advanced simulations (FLIP fluids, PYRO, RBD), leading to a 30% increase in project delivery efficiency while maintaining photorealistic accuracy for commercial campaigns.",
            "Enhanced client relationships by delivering innovative solutions that increased project budgets by 20%."
        ],
    },
    {
        title: "Junior FX Artist",
        company_name: "Starshield Technologies",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "2019-2021",
        points: [
            "Led the development of procedural asset models, reducing production costs by 15% through automated workflows and custom toolsets.",
            "Developed custom shaders using VEX and GLSL, enhancing the visual fidelity of interactive content and winning high-profile commercial contracts.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: git,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vishal-soni-135872233/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: '/iphoneProject',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
