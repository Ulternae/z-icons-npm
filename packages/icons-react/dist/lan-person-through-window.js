import React from 'react';

export const LanPersonThroughWindow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 32c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h80v-70.4c0-70.6 41.2-134.7 105.3-164.1 52.8-24.2 86.7-77 86.7-135.1V32zm304 14.4c0 63.8-33.6 122.3-87.4 154.7l63.6 86.9h64.5c9.3 0 18.2 4.1 24.3 11.2l91.2 106.4 8.9 10.4H592c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H352zM386.9 416h88l-82.3-96h-51.3l-54 40.5 93.5 126c5.3 7.1 3.8 17.1-3.3 22.4s-17.1 3.8-22.4-3.3L312.5 448H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h544c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H410.3l-23.5-32zm-118.6-81.2 35.1-26.3-67.6-92.4c-13.2 7.4-25.1 16.7-35.2 27.5zm-87.8-64.6c-13.2 22.4-20.6 48.3-20.6 75.4V416h128.7L180.4 270.2zM168 136a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanPersonThroughWindow;
