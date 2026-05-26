import React from 'react';

export const LanChevronSquareDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 464c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm229.7-66.3 120-120c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 332.7 109.7 218.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0z"})
);

export default LanChevronSquareDownThin;
