import React from 'react';

export const LanCoffeePot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 64c-26.5 0-48 21.5-48 48v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-44.2 35.8-80 80-80h373.1C468 32 480 44.1 480 58.9c0 3.3-.6 6.7-1.8 9.8l-43.9 113c47.2 35 77.8 91.1 77.8 154.3v8c0 55.5-34.6 99.4-55.9 121.2-9.9 10.2-23.9 14.8-38.1 14.8H158c-14.2 0-28.1-4.7-38.1-14.8C98.7 443.5 64 399.5 64 344v-8c0-63.2 30.6-119.3 77.8-154.3L96 64zm365.7 0H130.4L174 176h228.2l43.6-112zM96.8 320c-.5 5.3-.8 10.6-.8 16v8c0 42.6 27.2 78.8 46.8 98.8 2.7 2.8 7.7 5.2 15.2 5.2h260c7.5 0 12.5-2.4 15.2-5.2 19.6-20 46.8-56.2 46.8-98.8v-8c0-5.4-.3-10.7-.8-16zm6.5-32h369.4c-10.1-32.3-30.2-60.1-56.7-80H160c-26.4 19.9-46.5 47.7-56.7 80"})
);

export default LanCoffeePot;
