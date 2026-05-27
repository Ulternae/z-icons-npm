import React from 'react';

export const CoreThumbtack = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 64h-32v86.3l42.5 63.7c14 21 21.5 45.7 21.5 71v98.9H224v128h-64v-128H0V285c0-25.3 7.5-50 21.5-71L64 150.3V64H32V0h320zM128 169.7l-53.2 79.9c-7 10.5-10.7 22.9-10.8 35.5V320h96v-96h64v96h96v-34.9c0-12.6-3.7-25-10.7-35.5L256 169.7V64H128z"})
);

export default CoreThumbtack;
