import React from 'react';

export const LanPersonShelterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M260.2 1.2a7.95 7.95 0 0 0-8.4 0l-248 152c-2.4 1.5-3.8 4-3.8 6.8v344c0 4.4 3.6 8 8 8s8-3.6 8-8V164.5L256 17.4l240 147.1V504c0 4.4 3.6 8 8 8s8-3.6 8-8V160c0-2.8-1.4-5.4-3.8-6.8zM232 168a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-80 144c0-4.4-3.6-8-8-8s-8 3.6-8 8v168c0 17.7 14.3 32 32 32 9.6 0 18.1-4.2 24-10.8 5.9 6.6 14.4 10.8 24 10.8 17.7 0 32-14.3 32-32V312c0-4.4-3.6-8-8-8s-8 3.6-8 8v168c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-4.4-3.6-8-8-8s-8 3.6-8 8v96c0 8.8-7.2 16-16 16s-16-7.2-16-16zm-27.1-30.8c12.9-25.3 38.8-41.2 67.1-41.2s54.2 15.9 67.1 41.2l37.8 74.5c2 3.9 6.8 5.5 10.8 3.5s5.5-6.8 3.5-10.8l-37.8-74.5c-15.5-30.6-47-49.9-81.3-49.9s-65.8 19.3-81.3 49.9L137 348.4c-2 3.9-.4 8.8 3.5 10.8s8.8.4 10.8-3.5l37.8-74.5z"})
);

export default LanPersonShelterThin;
