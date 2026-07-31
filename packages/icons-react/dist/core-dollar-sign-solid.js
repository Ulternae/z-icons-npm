import React from 'react';

export const CoreDollarSignSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 384 544',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 528v-48H32v-64h128V280.3l-48.5-10.2C55.9 258.4 16 209.2 16 152.3 16 85.9 69.9 32 136.3 32H160v-48h64v48h128v64H224v132.4l64.5 13.6c55.7 11.7 95.5 60.8 95.5 117.7 0 66.5-53.9 120.3-120.3 120.3H224v48zm159.7-162.6q.3-2.85.3-5.7v-.7c0 2.2-.1 4.3-.3 6.4"})
);

export default CoreDollarSignSolid;
