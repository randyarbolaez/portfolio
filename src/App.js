import React from "react";

import About from "./components/About";
import Projects from "./components/Projects";

import Data from "./constants/projects.js";

import "./App.css";

function App() {
  return (
    <div>
      <About/>
      {Data.map((project) => (
        <Projects key={project.title} project={project} />
      ))}
      <About footer={true}/>
    </div>
  );
}

export default App;

// <Projects
//   title="Popina"
//   description="Simple website where you can post your restaurant so people can can check it out!"
//   img={Popina}
//   demo="https://popina-frontend.randyarbolaez0.now.sh/"
//   src="https://github.com/randyarbolaez/popina"
//   skills={[
//     "React",
//     "Next.js",
//     "GraphQL Yoga",
//     "Prisma",
//     "Styled Component",
//   ]}
// />

// <Projects
//   title="Tutoring Board"
//   description="Have you ever needed help with a subject in college but couldn’t find a tutor? This app solves that problem! With people posting their information and what subject they’re good at. The app doesn’t have pages(routes), it’s just modals, the UI is cleaner and the code is easier to read as well; I implemented a search feature, I was going to use a library but decided against it so I can learn."
//   img={TutoringBoard}
//   demo="https://tutoring-frontend.randyarbolaez0.now.sh/"
//   src="https://github.com/randyarbolaez/tutoring-frontend"
//   skills={["MongoDB", "Express", "React", "Node.JS", "Redux"]}
// />;

// <Projects
//   title="Employee Tracker"
//   description="This application can be used by any company that want a directory of their employees, I plan to keep updating it with more features, making it more complex while keeping the user interface simple and clean."
//   img={AnimalsPinPoint}
//   demo="https://frontend-86gi5znc5.now.sh/"
//   src="https://github.com/randyarbolaez/employee-tracker"
//   skills={[
//     "React",
//     "Next.js",
//     "GraphQL Yoga",
//     "Prisma",
//     "Styled Component",
//   ]}
// />;

// <Projects
//             title="Proder"
//             description="I built this application to help developers get ideas for projects to	build, all the content is user generated. I also implemented WebSocket to make a real time chat, along with tracking the traffic of users."
//             demo="https://proder-frontend.randyarbolaez0.now.sh/"
//             src="https://github.com/randyarbolaez/proder-frontend"
//             skills={["MongoDB", "Express", "React", "Node.JS", "Redux"]}
//           />
//           <Projects
//             title="MystView"
//             description="Application for people to get reviewed anonymously with a key that they'll input when they signup for an account."
//             img={MystView}
//             demo="https://mystview.herokuapp.com/"
//             src="https://github.com/randyarbolaez/mystView"
//             skills={["Javascript", " MongoDB", " Express", "Node.JS"]}
//           />
//           <Projects
//             title="Tutoring Board"
//             description="I built the backend first to make a web app, so then I decided to make a native app to go along with the web app."
//             img={TutoringBoardNative}
//             demo="https://expo.io/@spacecowboy/tutoring-board"
//             src="https://github.com/randyarbolaez/tutoring-native"
//             skills={["MongoDB", "Express", "React Native", "Node.JS", "Redux"]}
//           />
//           <Projects
//             title="Job Tracker"
//             description="This app is for people who need to track the jobs that they're applying to. It's like an address book but for jobs."
//             img={JobTracker}
//             demo="https://job-tracker.randyarbolaez0.now.sh/"
//             src="https://github.com/randyarbolaez/job-tracker"
//             skills={["MongoDB", "Express", "Angular 2+", "Node.JS"]}
//           />
//           <Projects
//             title="AnimalPinPoint"
//             description="Have you ever seen a lost dog and they didn't have a tag or maybe your dog ran away once and you can't find them?You post your lost dog on social media, put flyers up around the neighbor, hoping that somebody will see a flyer and contact. I built an app designed especially for that purpose if you lost your dog you can check if anybody has posted them.Or maybe you found a dog that doesn't have a tag and you can post them in AnimalPinPoint so that you can reunite them together!"
//             img={AnimalsPinPoint}
//             demo="https://expo.io/@spacecowboy/animal-pin-point"
//             src="https://github.com/randyarbolaez/animal-pinpoint"
//             skills={["React Native", "Firebase", "Redux", "Cloudinary"]}
//           />
