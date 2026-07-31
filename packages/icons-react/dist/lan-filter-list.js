import React from 'react';

export const LanFilterList = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M233.4 203.3 340.7 96H43.3l107.3 107.3c6 6 9.4 14.1 9.4 22.6v114.7l64 64V225.9c0-8.5 3.4-16.6 9.4-22.6M377 105 256 226v198.1c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-80-80c-4.5-4.5-7-10.6-7-17V225.9L7 105C.2 98.1-1.9 87.8 1.8 78.8S14.3 64 24 64h336c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2m87-41h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16M336 240h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 176h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanFilterList;
