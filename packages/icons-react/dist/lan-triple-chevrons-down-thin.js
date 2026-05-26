import React from 'react';

export const LanTripleChevronsDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M306.4 378.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-152 152-1.3 1c-3.1 2-7.3 1.7-10.1-1l-152-152-1-1.2c-2.1-3.1-1.7-7.3 1-10.1s7-3.1 10.1-1l1.2 1 146.3 146.3 146.3-146.3zm0-192c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-152 152-1.3 1c-3.1 2-7.3 1.7-10.1-1l-152-152-1-1.2c-2.1-3.1-1.7-7.3 1-10.1s7-3.1 10.1-1l1.2 1 146.3 146.3 146.3-146.3zm0-192c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-152 152-1.3 1c-3.1 2-7.3 1.7-10.1-1L2.3 5.6l-1-1.2C-.7 1.3-.4-2.9 2.4-5.7s7-3.1 10.1-1l1.2 1L160 140.7z"})
);

export default LanTripleChevronsDownThin;
