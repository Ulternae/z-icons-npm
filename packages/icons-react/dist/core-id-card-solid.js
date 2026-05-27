import React from 'react';

export const CoreIdCardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v384c0 17.8 7.3 34 19.1 45.6C30.6 505 46.5 512 64 512h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm144 136a72 72 0 1 1 0 144 72 72 0 1 1 0-144m144 265v47H64v-47c35.2-39.9 86.7-65 144-65s108.8 25.1 144 65m32-185v-48h128v48zm128 96H384v-48h128z"})
);

export default CoreIdCardSolid;
