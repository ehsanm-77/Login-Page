import { El } from './library/El';
import { landingPage } from './screen/LandingPage/landingPage';
export const app = () => {
  return El({
    element: 'div',
    className: 'bg-red-400 h-full',
    children: [landingPage()],
  });
};
