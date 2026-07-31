import React from 'react';

export const LanSquareVSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm93.5 125.3 66.5 133 66.5-133c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-88 176c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-88-176c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7z"})
);

export default LanSquareVSolid;
