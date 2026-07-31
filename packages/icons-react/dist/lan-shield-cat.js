import React from 'react';

export const LanShieldCat = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M243.6 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6-.5 94-39.4 259.8-195.5 334.5-7.9 3.8-17.2 3.8-25.1 0C87.4 399.7 48.5 234 48.1 139.9c-.1-12.1 7.5-22.8 18.8-27.6zm37.5-29.5c-16-6.8-34-6.8-50 0l-176.8 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.6 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM171.3 132.7c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8v128c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5L281.4 192h-50.7l-59.3-59.3zM176 272v-89.4l36.7 36.7c3 3 7.1 4.7 11.3 4.7h64c4.2 0 8.3-1.7 11.3-4.7l36.7-36.7V272c0 44.2-35.8 80-80 80s-80-35.8-80-80m56 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m64 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanShieldCat;
