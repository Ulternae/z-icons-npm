import React from 'react';

export const LanWineBottleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 320 640',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64-40c0 10.4 6.7 19.3 16 22.6v142.8C32.2 153.1 0 204.7 0 264v224c0 48.6 39.4 88 88 88h144c48.6 0 88-39.4 88-88V264c0-59.3-32.2-110.9-80-138.6V-17.4c9.3-3.3 16-12.2 16-22.6 0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24m64 88v-64h64v64zm0 48h64v44c0 9.4 5.5 18 14.1 21.9C245 179.5 272 218.6 272 264v8H48v-8c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9zm144 224v96H48v-96zm0 144v24c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40v-24z"})
);

export default LanWineBottleRegular;
