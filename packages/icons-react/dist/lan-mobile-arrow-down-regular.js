import React from 'react';

export const LanMobileArrowDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM80 0C44.7 0 16 28.7 16 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm48 392c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24m145-167c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V128c0-13.3-10.7-24-24-24s-24 10.7-24 24v86.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64z"})
);

export default LanMobileArrowDownRegular;
