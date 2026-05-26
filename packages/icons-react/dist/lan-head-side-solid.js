import React from 'react';

export const LanHeadSideSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M329.7 448c-5.1 0-9.7 3.7-9.7 8.8v7.2c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-63.6c0-12.6-5.1-24.5-13.1-34.2C19.1 327.5 0 278 0 224 0 100.3 100.3 0 224 0c112.7 0 206 83.3 221.7 191.7.4 3 1.7 5.9 3.6 8.3l35.8 42.9c7 8.4 10.9 19.1 10.9 30.1 0 25.9-21 47-47 47h-1c-8.8 0-16 7.2-16 16v48c0 35.3-28.7 64-64 64zM320 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanHeadSideSolid;
