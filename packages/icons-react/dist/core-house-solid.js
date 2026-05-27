import React from 'react';

export const CoreHouseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 512H64c-35.3 0-64-28.7-64-64V192c0-20.1 9.5-39.1 25.6-51.2L256-32l230.4 172.8c16.1 12.1 25.6 31.1 25.6 51.2v256c0 35.3-28.7 64-64 64zm96-224c-35.3 0-64 28.7-64 64v96h128v-96c0-35.3-28.7-64-64-64"})
);

export default CoreHouseSolid;
