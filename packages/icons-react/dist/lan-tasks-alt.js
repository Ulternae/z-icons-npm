import React from 'react';

export const LanTasksAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64v128h112c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm-102.6 0H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h9.4zm45.3 0-128 128h153.4V64zM0 80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm160 240v128h240c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm-32 0H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h80zM0 336c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"})
);

export default LanTasksAlt;
