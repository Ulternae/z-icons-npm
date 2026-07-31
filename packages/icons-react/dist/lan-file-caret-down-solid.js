import React from 'react';

export const LanFileCaretDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V170.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0zm36.2 252.9c-2.7-3.2-4.2-7.2-4.2-11.3 0-9.7 7.9-17.6 17.6-17.6h156.9c9.7 0 17.6 7.9 17.6 17.6 0 4.2-1.5 8.2-4.2 11.3l-78.7 93c-3.3 3.9-8.1 6.1-13.2 6.1s-9.9-2.2-13.2-6.1l-78.7-93z"})
);

export default LanFileCaretDownSolid;
