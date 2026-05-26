import React from 'react';

export const LanWindowFrameSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 256v192c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64zm-64 32h-96v160h96zm0-64V64h-96v160zm-160 0V64H96v160zm-96 64v160h96V288z"})
);

export default LanWindowFrameSolid;
