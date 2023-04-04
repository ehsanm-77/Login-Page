import { El } from '@/library/El';
// export const button = () => {
//   return El({
//     element: 'button',
//     className: 'p-2 bg-green',
//     children: 'click',
//   });
// };
export const Button = ({ element = 'button', ...rest }) => {
  return El({
    element,
    ...rest,
  });
};
