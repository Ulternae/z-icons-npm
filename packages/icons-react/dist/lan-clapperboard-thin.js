import React from 'react';

export const LanClapperboardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 208v176c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V208zm362.4-16H496v-64c0-16.4-8.3-31-20.9-39.6zm-21.9 0L459.7 81.4C456 80.5 452 80 448 80H323.4L218.5 192h138.1zm-55-112h-138l-105 112h138.1zm-160 0H64c-26.5 0-48 21.5-48 48v64h20.5zM512 128v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64"})
);

export default LanClapperboardThin;
