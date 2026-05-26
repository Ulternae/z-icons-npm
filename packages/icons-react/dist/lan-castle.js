import React from 'react';

export const LanCastle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v176H32v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v272c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-80V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v56h-96V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v56h-96zm0 88h224v104c0 8.8 7.2 16 16 16h96v192c0 17.7-14.3 32-32 32H336v-80c0-44.2-35.8-80-80-80s-80 35.8-80 80v80H64c-17.7 0-32-14.3-32-32V256h96c8.8 0 16-7.2 16-16zm160 264v80h-96v-80c0-26.5 21.5-48 48-48s48 21.5 48 48"})
);

export default LanCastle;
