import drawingBoard from './project-drawingboard.png';
import toodleedoo from './project-toodleedoo.png';
import tweeter from './project-tweeter.png';
import catdash from './project-catdash.gif';

export const projects = [
  {
    name: 'the Drawing Board',
    description: "A collaborative meeting app that allows users to schedule and host meetings remotely, whiteboard over documents in real-time, and take personal notes. Audio streaming and text chats are enabled in the meeting room for communication, and when the meeting ends, marked up documents and notes are saved to users' dashboards for future reference.",
    image: drawingBoard,
    url: 'https://github.com/tammiec/theDrawingBoard',
  },
  {
    name: 'Cat-Dash',
    description: 'A simple Chrome extension that shows the user a randomly generated photo of a cat whenever a new tab is opened. The dashboard is customizable with different colours, as well as a personalized greeting.',
    image: catdash,
    url: 'https://github.com/tammiec/cat-dash',
  },
  {
    name: 'Toodleedoo',
    description: 'Toodleedoo is a smart to-do list application that helps you organize and sort your tasks. Upon categorization, Toodleedoo will suggest three resources for the user to check out. The user has the ability to edit the name of their task, add a description, add additional resources, mark it as complete, mark it as important, and send the task to another local user.',
    image: toodleedoo,
    url: 'https://github.com/tammiec/toodleedoo'
  },
  {
    name: 'Tweeter',
    description: 'A single-page Twitter clone project powered by Ajax.',
    image: tweeter,
    url: 'https://github.com/tammiec/tweeter'
  },
]