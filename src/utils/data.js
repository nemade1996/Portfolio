import service1 from "../images/i1.png"
import service2 from "../images/i2.png"
import service3 from "../images/i3.png"
import service4 from "../images/i4.png"
import service5 from "../images/i5.png"
import service6 from "../images/i6.png"

import w1 from "../images/w1.jpeg"
import w2 from "../images/w2.jpeg"
import w3 from "../images/w3.jpeg"
import w4 from "../images/w4.jpeg"
import w5 from "../images/w5.jpeg"
import w6 from "../images/w6.jpeg"
import w7 from "../images/w7.jpeg"
import w8 from "../images/w8.jpeg"
import w9 from "../images/w9.jpeg"

export const portfolioData = {
    name: "Neha Nemade",
    designation: "Front End Developer",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/neha-nemade-115516186/",
      instagram: "https://instagram.com"
    }
};

export const personalInfo = {
  name: "Creative Director and UI/UX Designer",
  location: "Sydney, Australia",
  profession: "Creative Director and UI/UX Designer",
  specialties: ["web development", "print media"],
  description: "I am Front end developer specializing in the website development arena. Experienced with a demonstrated history of working in the information technology and services industry. Industrious nature helped me to achieve skills in HTML, Javscript, CSS, Jquery, React JS.",
  contact: {
    phone: "+91 84128 07179",
    email: "neha1996nemade@gmail.com",
    location: "Mumbai, India",
    birthday: "Jan 17, 1996"
  }
};

export const services = [
  {
    icon: service1,
    title: "Website Design",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    parmoted : true,
  },
  {
    icon: service2,
    title: "Responsive Design",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    parmoted : false,
  },
  {
    icon: service3,
    title: "Photography",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    parmoted : false,
  },
  {
    icon: service4,
    title: "Creative Work",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    parmoted : false,
  },
  {
    icon: service5,
    title: "Good Management",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    parmoted : true,
  },
  {
    icon: service6,
    title: "Well Communication",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    parmoted : false,
  }
];


export const educationDetails = [
  {
    placeName: "MET’s IOE ,Nashik",
    education: {
      degree: "Bachelor of Engineering",
      branch: "Computer Science",
      year: 2017
    }
  },
  {
    placeName: "Governmenst Polytechnique, Jalgaon",
    education: {
      degree: "Master of Science",
      branch: "Diploma in Computer",
      year: 2014
    }
  },
  {
    placeName: "DJVK High school,Bhusawal",
    education: {
      degree: "SSC",
      branch: "State Board",
      year: 2011
    }
  }
];


export const experienceDetails = [
  {
    companyName: "Matrix Bricks Infotech, Ghansoli (W) , Mumbai",
    role: "Front End developer",
    duration: "Jun 2018 - Present",
    description: "Worked on developing scalable web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to define and implement new features."
  },
  {
    companyName: "Four Brothers Software Solution",
    role: " Trainee Web Designer",
    duration: "Feb 2018 - May 2018",
    description: "Focused on creating responsive and user-friendly web interfaces. Implemented several key features for the company's main products using React and Redux."
  }
];

export const portfolioItems = [
  { id: 1, category:"HTML", link: 'https://www.prishtygroup.com/', title: 'Prishty Group', imgSrc: w1 },
  { id: 2, category:"HTML", link: 'https://davideventuri.it/', title: 'Davide Venturi', imgSrc: w2 },
  { id: 3, category:"HTML", link: 'https://minfra.co/', title: 'Minfra', imgSrc: w3 },
  { id: 4, category:"HTML", link: 'https://calibarcontracts.co.uk/', title: 'Calibar Contracts', imgSrc: w4 },
  { id: 5, category:"HTML", link: 'https://insurefutureindia.com/', title: 'Insure Future India', imgSrc: w5 },
  { id: 6, category:"HTML", link: 'https://kandor.in/', title: 'Kandor', imgSrc: w6 },
  { id: 7, category:"Wordpress", link: 'https://unusualescape.com/', title: 'Unusual Escape', imgSrc: w7 },
  { id: 8, category:"Wordpress", link: 'http://evolute.in/', title: 'Evolute', imgSrc: w8 },
  { id: 9, category:"HTML", link: 'https://www.bioaltuslabs.com/', title: 'Bioaltus Labs', imgSrc: w9 },
];