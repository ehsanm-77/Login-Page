import { El } from '@/library/El';
import { auth } from '../Auth';

const shoesShop = document.getElementById('app');

const hasVisitedLandingPage = JSON.parse(
  localStorage.getItem('hasVisitedLandingPage')
);
export const homePage = () => {
  if (hasVisitedLandingPage) {
    return auth();
  } else {
    localStorage.setItem('hasVisitedLandingPage', true);
    return El({
      element: 'div',
      className:
        'bg-slate-300 flex flex-col justify-between items-center text-white text-center p-4 h-full bg-[url("./src/assets/img/super-straho-5BMPrXBFTI8-unsplash.jpg")] bg-cover bg-center',
      children: [
        El({
          element: 'h1',
          className: 'font-bold text-3xl',
          children: 'Welcome to our website!',
        }),
        El({
          element: 'button',
          className:
            'bg-sky-600 p-3 rounded-2xl hover:bg-green-500 w-1/2 md:w-1/4 bg-[url("./src/assets/img/engin-akyurt-BawjznQ3Q8U-unsplash.jpg")] bg-cover bg-center shadow-2xl',
          children: 'Get Started',
          eventListener: [
            {
              event: 'click',
              callback: function () {
                history.pushState(null, null, '/login');
                shoesShop.innerHTML = '';
                shoesShop.appendChild(auth());
              },
            },
          ],
        }),
      ],
    });
  }
};
