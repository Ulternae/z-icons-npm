import React from 'react';

export const LanFileSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L480 425.5v-239c0-17-6.7-33.3-18.7-45.3L338.7 18.7C326.7 6.7 310.5 0 293.5 0H160c-28.5 0-52.7 18.7-61 44.5zM128 73.5V64c0-17.7 14.3-32 32-32h128v96c0 35.3 28.7 64 64 64h96v201.5zM96 448c0 35.3 28.7 64 64 64h256c10.9 0 21.1-2.7 30-7.5l-24.9-24.9c-1.7.3-3.4.4-5.1.4H160c-17.7 0-32-14.3-32-32V186.5l-32-32zm338.7-288H352c-17.7 0-32-14.3-32-32V45.3z"})
);

export default LanFileSlash;
