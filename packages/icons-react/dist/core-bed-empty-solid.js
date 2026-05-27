import React from 'react';

export const CoreBedEmptySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64V32H0v448h64v-64h512v64h64V224c0-53-43-96-96-96H64zm0 128h128v160H64z"})
);

export default CoreBedEmptySolid;
