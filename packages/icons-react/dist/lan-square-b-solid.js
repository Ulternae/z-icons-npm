import React from 'react';

export const LanSquareBSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 136c0-13.3 10.7-24 24-24h68c37.6 0 68 30.4 68 68 0 12.7-3.5 24.7-9.6 34.8C310 259.3 320 278.4 320 300c0 37.6-30.4 68-68 68h-84c-13.3 0-24-10.7-24-24zm112 44c0-11-9-20-20-20h-44v40h44c11 0 20-9 20-20m-64 108h60c11 0 20-9 20-20s-9-20-20-20h-60z"})
);

export default LanSquareBSolid;
