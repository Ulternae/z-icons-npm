import React from 'react';

export const LanRectangleProThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm72 32h64c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m64 96c22.1 0 40-17.9 40-40s-17.9-40-40-40H80v80zm96-96h64c30.9 0 56 25.1 56 56 0 22.9-13.7 42.5-33.4 51.2C338.7 280 352 302.4 352 328v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56h-40v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m48 96h16c22.1 0 40-17.9 40-40s-17.9-40-40-40h-56v80zm120-40v80c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40h-16c-22.1 0-40 17.9-40 40m40-56h16c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56"})
);

export default LanRectangleProThin;
