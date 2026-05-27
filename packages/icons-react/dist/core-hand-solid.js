import React from 'react';

export const CoreHandSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 48c0-26.5 21.5-48 48-48s48 21.5 48 48v176h32V112c0-26.5 21.5-48 48-48s48 21.5 48 48v240c0 88.4-71.6 160-160 160h-96C86 512 0 426 0 320v-96h64v96h32V80c0-26.5 21.5-48 48-48s48 21.5 48 48v144h32z"})
);

export default CoreHandSolid;
