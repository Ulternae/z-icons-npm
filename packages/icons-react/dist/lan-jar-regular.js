import React from 'react';

export const LanJarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32-8c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H56C42.7-32 32-21.3 32-8m224 120c8.8 0 16 7.2 16 16v80H48v-80c0-8.8 7.2-16 16-16zm16 240v96c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-96zM64 64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64z"})
);

export default LanJarRegular;
