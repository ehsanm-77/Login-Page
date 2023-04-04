// import { Button } from '@/components/shared';
import { El } from '@/library/El';
import { goToLogin, goToRegister } from '@/library/Validation';
import { validateForm } from '@/library/Validation';
export const auth = () => {
  return El({
    element: 'div',
    children: [
      El({
        element: 'div',
        className: 'absolute backdrop-blur-sm h-screen w-screen z-10',
      }),
      El({
        element: 'div',
        className:
          'flex justify-center items-center h-screen bg-gray-100 bg-[url("./src/assets/img/xavier-teo-SxAXphIPWeg-unsplash.jpg")] bg-cover bg-center',
        children: [
          El({
            element: 'div',
            className:
              'absolute z-20 max-w-md w-full p-6 rounded-2xl shadow-md bg-gray-200',
            children: [
              El({
                element: 'h2',
                innerHTML: 'Emo Shop',
                className: 'text-center text-2xl font-bold mb-4',
              }),
              El({
                element: 'div',
                className: 'flex items-center justify-center mb-10',
                children: [
                  El({
                    element: 'button',
                    id: 'loginBtn',
                    innerHTML: 'Login',
                    disabled: true,
                    eventListener: [
                      {
                        event: 'click',
                        callback: goToLogin,
                      },
                    ],
                    className:
                      'px-3 py-2 rounded-l-xl w-1/2 bg-slate-400 text-white font-medium text-sm',
                  }),
                  El({
                    element: 'button',
                    id: 'registerBtn',
                    innerHTML: 'Register',
                    eventListener: [
                      {
                        event: 'click',
                        callback: goToRegister,
                      },
                    ],
                    className:
                      'px-3 py-2 rounded-r-xl w-1/2 bg-blue-500 text-white font-medium text-sm',
                  }),
                ],
              }),
              El({
                element: 'form',
                id: 'form',
                className: 'space-y-4',
                eventListener: [
                  {
                    event: 'submit',
                    callback: (e) => {
                      e.preventDefault();
                      if (validateForm()) {
                        console.log('object');
                      }
                      console.log('object');
                    },
                  },
                ],
                children: [
                  El({
                    element: 'div',
                    className: 'hidden',
                    id: 'nameField',
                    children: [
                      El({
                        element: 'label',
                        innerHTML: 'Name :',
                        className: 'block text-gray-700 font-medium text-sm',
                        for: 'name',
                      }),
                      El({
                        element: 'input',
                        type: 'text',
                        id: 'name',
                        name: 'name',
                        className:
                          'w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 border-none text-sm',
                        placeholder: 'Enter your name',
                      }),
                      El({
                        element: 'p',
                        id: 'nameError',
                        className: 'hidden text-red-500 text-sm',
                        innerHTML: 'Please enter your name.',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    children: [
                      El({
                        element: 'label',
                        innerHTML: 'Email :',
                        className: 'block text-gray-700 font-medium text-sm',
                        for: 'email',
                      }),
                      El({
                        element: 'input',
                        type: 'text',
                        id: 'email',
                        name: 'email',
                        className:
                          'w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 border-none text-sm',
                        placeholder: 'Enter your email',
                      }),
                      El({
                        element: 'p',
                        id: 'emailError',
                        className: 'hidden text-red-500 text-sm',
                        innerHTML: 'Please enter a valid email address.',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    children: [
                      El({
                        element: 'label',
                        innerHTML: 'Password :',
                        className: 'block text-gray-700 text-sm',
                        for: 'password',
                      }),
                      El({
                        element: 'input',
                        type: 'password',
                        id: 'password',
                        name: 'password',
                        className:
                          'w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 border-none text-sm',
                        placeholder: 'Enter your password',
                      }),
                      El({
                        element: 'p',
                        id: 'passwordError',
                        className: 'hidden text-red-500 text-sm',
                        innerHTML: 'Please enter a password.',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    id: 'confirmPasswordInput',
                    className: 'hidden',
                    children: [
                      El({
                        element: 'label',
                        innerHTML: 'Confirm Password :',
                        className: 'block text-gray-700 text-sm',
                        for: 'confirmPassword',
                      }),
                      El({
                        element: 'input',
                        type: 'password',
                        id: 'confirmPassword',
                        name: 'confirmPassword',
                        className:
                          'w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 border-none text-sm',
                        placeholder: 'Confirm your password',
                      }),
                      El({
                        element: 'p',
                        id: 'confirmPasswordError',
                        className: 'hidden text-red-500 text-sm',
                        innerHTML: 'Passwords do not match.',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex items-center justify-between pt-10',
                    children: [
                      El({
                        element: 'button',
                        type: 'submit',
                        innerHTML: 'Submit',
                        className:
                          'px-5 py-2 rounded-2xl bg-blue-500 text-white font-medium text-sm',
                      }),
                      El({
                        element: 'button',
                        type: 'button',
                        innerHTML: 'Cancel',
                        className:
                          'px-3 py-2 rounded-2xl bg-gray-300 text-gray-600 font-medium text-sm',
                        eventListener: [
                          {
                            event: 'click',
                            callback: () => {
                              document.getElementById('form').reset();
                            },
                          },
                        ],
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    id: 'successful-submit',
                    className:
                      'bg-green-400 text-white rounded-full text-center w-1/2 p-1 animate-bounce mx-auto hidden',
                    innerHTML: 'Successful Submission',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
