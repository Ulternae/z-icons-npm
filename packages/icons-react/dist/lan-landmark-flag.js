import React from 'react';

export const LanLandmarkFlag = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 0v48h-80V0zm-80 80h96c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v144H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v240H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V160h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H256zm160 80v240h-80V160zm-208 0h96v240h-96zm-32 0v240H96V160zM0 496c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16"})
);

export default LanLandmarkFlag;
