import React from 'react';

export const NeoAngleLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 336 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M212.6 13.1C222.2 4.5 234.5 0 247 0c35.4 0 59.6 33.7 51.7 66.4C288.7 108 273 187.9 273 280s15.7 172 25.7 213.6c7.9 32.6-16.3 66.4-51.7 66.4-12.5 0-24.8-4.5-34.4-13.1-15.2-13.6-53.1-48.3-93.9-92-40.4-43.3-85-97.1-112.3-148.7C2 297.8 0 288.7 0 279.9s2-17.9 6.4-26.3C33.6 202 78.3 148.2 118.7 104.9c40.7-43.7 78.7-78.4 93.9-92zm29.7 48.6c-17.5 15.9-49.1 45.6-82.6 81.5-39.4 42.3-80 91.9-103.7 136.8 23.7 44.9 64.2 94.5 103.7 136.8 33.5 35.9 65.1 65.6 82.6 81.5-10.6-46-25.3-126.2-25.3-218.3s14.7-172.3 25.3-218.3"})
);

export default NeoAngleLeft;
