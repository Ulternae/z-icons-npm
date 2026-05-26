import React from 'react';

export const LanChopsticksThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M404.9 85.7C424.8 60 415 29.2 395 12.9c-22.7-18.4-54.3-16.1-72.4 7.4l-.3.3L4.7 475c-7.5 9.9-5.8 24.2 4 32 9.9 7.9 24.1 6.2 31.9-3.7L404.8 85.8l.1-.2zm-69.6-55.8c12.7-16.3 33.9-17.4 49.6-4.6 14.6 11.8 21.9 31.6 7.5 50.4L28.1 493.4c-2.3 3-6.5 3.5-9.4 1.2-3-2.4-3.5-6.8-1.2-9.9zm286.2 126.6c22.6-19.2 23.5-51 4.3-73-17-19.4-48.3-28.1-73.2-6.9l-.3.3-416.3 395c-9.5 8.2-10.6 22.6-2.3 32.1 8.2 9.5 22.6 10.6 32.2 2.6l455.4-349.9.3-.2zm-58.4-67.8c15.9-13.4 37.4-9.8 50.6 5.4 13.4 15.3 13.3 36.6-2.4 50.1L155.6 494.3c-3 2.5-7.4 2.2-9.9-.7s-2.2-7.1.8-9.6z"})
);

export default LanChopsticksThin;
