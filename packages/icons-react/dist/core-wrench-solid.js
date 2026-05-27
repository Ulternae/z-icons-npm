import React from 'react';

export const CoreWrenchSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M318.4 21.3c8.9-5.9 20.2-7 30.1-2.9C435.1 54.6 496 140.1 496 239.9c0 85.5-44.8 160.5-112 203v69H128v-69c-67.2-42.5-112-117.5-112-203 0-99.8 61-185.3 147.5-221.5 9.9-4.1 21.2-3 30.1 2.9s14.2 16 14.2 26.7v144.6l48.1 38.4 48.1-38.4.2-144.6.2-4c1.2-9.2 6.2-17.5 14-22.7"})
);

export default CoreWrenchSolid;
