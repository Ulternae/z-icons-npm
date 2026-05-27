import React from 'react';

export const CoreEyeSlashRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M99.7 256c9.2-18.1 20.1-35.7 32.4-52.3L343 414.6c-7.5.9-15.1 1.4-22.8 1.4-99.7 0-177.7-76-220.5-160M297.4 97.4c7.5-.9 15.1-1.4 22.9-1.4C420 96 498 172 540.8 256c-9.2 18.1-20.1 35.7-32.5 52.3z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM132.2 203.7C119.9 220.3 109 238 99.8 256c42.8 84 120.9 160 220.5 160 7.8 0 15.4-.5 22.8-1.4l53.7 53.7c-24.2 7.5-49.8 11.7-76.5 11.7-135.2 0-241.5-105.6-290.7-224 14.3-34.5 33.6-67.9 56.9-98zM320.3 32C455.5 32 561.8 137.6 611 256c-14.3 34.5-33.6 67.9-56.9 98l-45.7-45.7c12.3-16.6 23.3-34.3 32.5-52.3C498.1 172 420 96 320.4 96c-7.8 0-15.4.5-22.9 1.4l-53.8-53.7c24.2-7.5 49.8-11.7 76.6-11.7"})
);

export default CoreEyeSlashRegularDuo;
