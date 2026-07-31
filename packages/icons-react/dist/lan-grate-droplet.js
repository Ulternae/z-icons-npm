import React from 'react';

export const LanGrateDroplet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 32h272c35.3 0 64 28.7 64 64v90c-10.1-4.7-21.1-7-32-7V96c0-17.7-14.3-32-32-32h-32v148.5c-13.4 15.6-30 36.1-45.8 59.5H336v176h9.5c1.5 11.1 4.1 21.8 7.6 32H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-80 240v144c0 17.7 14.3 32 32 32h32V272zm96 176h80V272h-80zM416 64h-80v176h80zm-112 0h-80v176h80zm-112 0h-32c-17.7 0-32 14.3-32 32v144h64zm232 362.1c0 46.9 38.9 85.9 88 85.9s88-39 88-85.9c0-25.6-12.4-57.1-31.8-89.4-18-29.9-39.9-57.1-56.2-75.8-16.4 18.7-38.2 45.8-56.2 75.8-19.4 32.3-31.8 63.8-31.8 89.4M512 544c-66.3 0-120-52.8-120-117.9 0-68.9 64.1-150.4 98.6-189.3 11.6-13.1 31.3-13.1 42.9 0 34.5 38.9 98.6 120.4 98.6 189.3 0 65.1-53.7 117.9-120 117.9z"})
);

export default LanGrateDroplet;
