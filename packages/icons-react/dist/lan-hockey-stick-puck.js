import React from 'react';

export const LanHockeyStickPuck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M513.2-22c3.3-8.2 12.7-12.1 20.8-8.8s12.1 12.7 8.8 20.8L359.2 442.2C342 484.4 300.9 512 255.4 512H112c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h262.2L513.1-22zm98.1 438.2c16.1 1.6 28.7 15.3 28.7 31.8v32l-.2 3.3c-1.5 15-13.5 27-28.6 28.6l-3.3.2h-128l-3.3-.2c-15.1-1.5-27-13.5-28.6-28.6l-.2-3.3v-32c0-16.6 12.6-30.2 28.7-31.8l3.3-.2h128l3.3.2zM480 480h128v-32H480zM112 352c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h48V352zm80 128h63.4c32.5 0 61.9-19.7 74.1-49.9l31.8-78.1H192z"})
);

export default LanHockeyStickPuck;
