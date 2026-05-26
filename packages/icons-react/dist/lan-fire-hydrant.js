import React from 'react';

export const LanFireHydrant = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 0c8.8 0 16 7.2 16 16v17c57.9 7.2 103.8 53.1 111 111h17c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v48h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16v64h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-64H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h16v-48H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h17c7.2-57.9 53.1-103.8 111-111V16c0-8.8 7.2-16 16-16m0 64c-47.6 0-87.1 34.6-94.7 80h189.3c-7.6-45.4-47.1-80-94.7-80zM64 256H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h16zm32 144v80h192V176H96zm224-16h16c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-16zm-96-64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanFireHydrant;
