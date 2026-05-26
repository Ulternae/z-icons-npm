import React from 'react';

export const LanPersonThroughWindowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 48v18.4c0 46.1-28.9 87.3-72.2 103.1C169.5 192.2 128 251.4 128 317.7v82.4H48v-352h256zm48 0h240v352h-81.7L499 385.4l-75.2-97.8c-7.6-9.8-19.3-15.6-31.7-15.6H333l-49.4-75.7c42.1-28.9 68.4-77.2 68.4-130zm97.7 352h-64.6l32 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v352c0 26.5 21.5 48 48 48h255.9l36.2 53.5c7.4 11 22.4 13.8 33.3 6.4s13.8-22.4 6.4-33.3l-82.7-122.1 46.4-32.5h44.6l61.5 80zm-178.3 0H176v-82.4c0-15.7 3.3-30.8 9.4-44.5zm-1.1-87.3-54.1-79.9c7.3-6 15.4-11 24.2-15l51.9 79.6-22 15.4zM192 128a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanPersonThroughWindowRegular;
