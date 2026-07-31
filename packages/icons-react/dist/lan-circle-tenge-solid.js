import React from 'react';

export const LanCircleTengeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-368h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16m8 64h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V256h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanCircleTengeSolid;
