/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
import Aura from '../assets/images/Portfolio/Aura.png';
import Surtido from '../assets/images/Portfolio/Surtido.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/LITHISHS.jpg';
import Finance from '../assets/images/TeamMembers/DIWAKAR.jpg';
import ProjectManager from '../assets/images/TeamMembers/RAKSITH.jpg';
import Frontend1 from '../assets/images/TeamMembers/ESHAN.jpg';
import Backend1 from '../assets/images/TeamMembers/Mobile1.jpg';
import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';

export const Services = [
  {
    title: 'Full stack Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'Graphic Designer',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Recruiting App',
    imageUrl: Recruiting,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Stream+',
    imageUrl: Stream,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Freelance',
    imageUrl: Freelance,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
  {
    id: 'asd1293ufgdfgs4',
    title: 'Aura',
    imageUrl: Aura,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  },
  {
    id: 'asd1293ulskmnb5',
    title: 'Surtido Rico',
    imageUrl: Surtido,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  },
  {
    id: 'asd1293ulkmnbj6',
    title: 'Courses Management',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
];

export const Advantages = [
  [{
    title: 'React',
    imageUrl: Communicative,
  },
  {
    title: 'JS',
    imageUrl: Management,
  }],
  [{
    title: 'Python​',
    imageUrl: Collaborative,
  },
  {
    title: 'Express',
    imageUrl: Favorite,
  }],
  [{
    title: 'Python​',
    imageUrl: Collaborative,
  },
  {
    title: 'Express',
    imageUrl: Favorite,
  }],
  [{
    title: 'MySQL​',
    imageUrl: Collaborative,
  },
  {
    title: 'MongoDB',
    imageUrl: Favorite,
  }],
  [{
    title: 'Node JS​',
    imageUrl: Collaborative,
  },
  {
    title: 'Flutter',
    imageUrl: Favorite,
  }],
  [{
    title: 'Node JS​',
    imageUrl: Collaborative,
  },
  {
    title: 'Flutter',
    imageUrl: Favorite,
  }],
  [{
    title: 'Node JS​',
    imageUrl: Collaborative,
  },
  {
    title: 'Flutter',
    imageUrl: Favorite,
  }],
];
export const TeamMembers = [
  {
    name: 'Asin Raja',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Lithish',
    position: 'Full stack developer',
    imageUrl: HRD,
  },
  {
    name: 'Diwakar',
    position: 'Backend developer',
    imageUrl: Finance,
  },
  {
    name: 'Raksith',
    position: 'Back-end Developer & UI/UX Designer',
    imageUrl: ProjectManager,
  },
  {
    name: 'Eshan',
    position: 'Project Manager',
    imageUrl: Frontend1,
  },
  {
    name: 'Jim Hendrix',
    position: 'Front-end Developer',
    imageUrl: Backend1,  // You can change this if needed to a UI/UX image
  },
  {
    name: 'Igor Kavarov',
    position: 'Mobile Developer',
    imageUrl: Mobile2,
  },
];
