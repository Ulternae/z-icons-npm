import React from 'react';

export const LanSquareM = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm157 70.7 67 93.8 67-93.8c4-5.7 11.3-8.1 17.9-5.9S320 169 320 176v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V225.9l-51 71.4c-3 4.2-7.9 6.7-13 6.7s-10-2.5-13-6.7l-51-71.4V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-7 4.5-13.1 11.1-15.2s13.9.3 17.9 5.9"})
);

export default LanSquareM;
