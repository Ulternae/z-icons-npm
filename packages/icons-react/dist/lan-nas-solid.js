import React from 'react';

export const LanNasSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zM72 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm152-240c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM72 256c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm176-48a24 24 0 1 1 0-48 24 24 0 1 1 0 48m160 0a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanNasSolid;
