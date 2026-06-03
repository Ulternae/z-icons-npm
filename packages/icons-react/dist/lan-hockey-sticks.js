import React from 'react';

export const LanHockeySticks = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.972 640 543.972',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M449.2-22c3.3-8.2 12.7-12.1 20.8-8.8s12.1 12.7 8.8 20.8L295.2 442.2C278 484.4 236.9 512 191.4 512H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h262.2L449.1-22zM592 320c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H448.6c-44.7 0-85-26.6-102.7-67.4l17.2-42.3 11.3 27.9c12.3 30.1 41.6 49.9 74.1 49.9h63.4v-128H383.5l13-32h195.4zM48 352c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h48V352zm80 128h63.4c32.5 0 61.9-19.7 74.1-49.9l31.7-78.1H128zm416 0h48c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-48zM169.9-30.8c8.2-3.3 17.5.6 20.8 8.8l103.4 254.2-17.3 42.5L161.2-10c-3.3-8.2.6-17.5 8.8-20.8z"})
);

export default LanHockeySticks;
