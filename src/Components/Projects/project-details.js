import drawingBoard from './project-drawingboard.png';
import toodleedoo from './project-toodleedoo.png';
import tweeter from './project-tweeter.png';

export const projects = [
  {
    name: 'the Drawing Board',
    description: "A collaborative meeting app that allows users to schedule and host meetings remotely, whiteboard over documents in real-time, and take personal notes. Audio streaming and text chats are enabled in the meeting room for communication, and when the meeting ends, marked up documents and notes are saved to users' dashboards for future reference.",
    image: drawingBoard
  },
  {
    name: 'Toodleedoo',
    description: 'Toodleedoo is a smart to-do list application that helps you organize and sort your tasks. Upon categorization, Toodleedoo will suggest three resources for the user to check out. The user has the ability to edit the name of their task, add a description, add additional resources, mark it as complete, mark it as important, and send the task to another local user.',
    image: toodleedoo
  },
  {
    name: 'Tweeter',
    description: 'A single-page Twitter clone project powered by Ajax.',
    image: tweeter
  }
]