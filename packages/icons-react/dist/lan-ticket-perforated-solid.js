import React from 'react';

export const LanTicketPerforatedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm416 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanTicketPerforatedSolid;
