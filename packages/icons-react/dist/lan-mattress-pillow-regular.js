import React from 'react';

export const LanMattressPillowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 112v288H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm48 0h192c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H320zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 128v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"})
);

export default LanMattressPillowRegular;
