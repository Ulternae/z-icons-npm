import React from 'react';

export const LanHomeBlankSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M234.2 8.6c12.3-11.4 31.3-11.4 43.5 0l224 208c9.6 9 12.8 22.9 8 35.1S493.2 272 480 272h-16v176c0 35.3-28.7 64-64 64H112c-35.3 0-64-28.7-64-64V272H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8-35.1z"})
);

export default LanHomeBlankSolid;
