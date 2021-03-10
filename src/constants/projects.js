import MystViewGif from '../assets/gifs/mystview.gif';
import AnimalPinPoint from '../assets/gifs/animalPinPoint.gif';
import Owpu from '../assets/gifs/owpu.gif';

let data = [
  {
    "title":"Owpu",
    "description":"An app for users to collaboratively take notes. Implemented WebSocket for real time collaboration.",
    "demo":"http://owpu.herokuapp.com/",
    "src":"https://github.com/randyarbolaez/online-word-processor-ui",
    "skills":["WebSocket", "Express", "React", "Node.js"],
    "gif":Owpu,
  },
  {
    "title": "MystView",
/*    "description": "Application for people to get reviewed anonymously with a key that they'll input when they signup for an account. It features sentiment analysis to analyze the reviews and change the design based on the analysis.",
*/   "description":"Users get reviewed anonymously and the interface changes based on if the review is negative/positive using sentiment analysis.",
    "demo": "https://mystview.herokuapp.com/",
    "src": "https://github.com/randyarbolaez/mystView",
    "skills": ["Javascript", " MongoDB", " Express", "Node.JS"],
    "gif":MystViewGif
  },
  /*{
    "title": "Proder",
    "description": "I built this application to help developers get ideas for projects to build, all the content is user generated. I also implemented WebSocket to make a real time chat, along with tracking the traffic of users.",
    "demo": "https://proder-frontend.randyarbolaez0.now.sh/",
    "src": "https://github.com/randyarbolaez/proder-frontend",
    "skills": ["MongoDB", "Express", "React", "Node.JS", "Redux"],
    "gif":"../assets/gifs/mystview.gif"
  },
  {
    "title": "Tutoring Board",
    "description": "Have you ever needed help with a subject in college but couldn’t find a tutor? This app solves that problem! With people posting their information and what subject they’re good at. The app doesn’t feature any pages, it’s just modals. I've implemented a search and Bookmark feature",
    "demo": "https://tutoring-frontend.randyarbolaez0.now.sh/",
    "src": "https://github.com/randyarbolaez/tutoring-frontend",
    "skills": ["MongoDB", "Express", "React", "Node.JS", "Redux"],
    "gif":"../assets/gifs/mystview.gif"
  },
  {
    "title": "Tutoring Board(Native)",
    "description": "I built the backend first to make a web app, so then I decided to make a native app to go along with the web app.",
    "demo": "https://expo.io/@spacecowboy/tutoring-board",
    "src": "https://github.com/randyarbolaez/tutoring-native",
    "skills": ["MongoDB", "Express", "React Native", "Node.JS", "Redux"],
    "gif":"../assets/gifs/mystview.gif"
  },*/
  {
    "title": "AnimalPinPoint",
/*    "description": "Have you ever seen a lost dog and they didn't have a tag or maybe your dog ran away once and you can't find them?You post your lost dog on social media, put flyers up around the neighbor, hoping that somebody will see a flyer and contact. I built an app designed especially for that purpose if you lost your dog you can check if anybody has posted them.Or maybe you found a dog that doesn't have a tag and you can post them in AnimalPinPoint so that you can reunite them together!",
*/  "description":"Users post lost animals they see in hope to reunite them with their owner. Implemented Google Maps API.", 
    "demo": "https://expo.io/@spacecowboy/animal-pin-point",
    "src": "https://github.com/randyarbolaez/animal-pinpoint",
    "skills": ["React Native", "Firebase", "Redux", "Cloudinary"],
    "gif": AnimalPinPoint
  },
  /*{
    "title": "Job Tracker",
    "description": "This app is for people who need to track the jobs that they're applying to. It's like an address book but for jobs.",
    "demo": "https://job-tracker.randyarbolaez0.now.sh/",
    "src": "https://github.com/randyarbolaez/job-tracker",
    "skills": ["MongoDB", "Express", "Angular 2+", "Node.JS"],
    "gif":"../assets/gifs/mystview.gif"
  },
  {
    "title": "Bild",
    "description": "I built this app to see the difference between Rest and Graphql; it features authentication and relations between models, all the while the interface is straightforward and clean.",
    "demo": "https://bild-frontend.vercel.app/",
    "src": "https://github.com/randyarbolaez/bild-frontend",
    "skills": ["React", "Next.js", "GraphQL Yoga", "Prisma", "Styled Component"],
    "gif":"../assets/gifs/mystview.gif"
  }*/
]

export default data;
