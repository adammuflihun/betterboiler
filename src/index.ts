import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});

// loop an element
const elements = document.querySelectorAll('.my-element');
elements.forEach((element) => {
  // do something with elementll
});
