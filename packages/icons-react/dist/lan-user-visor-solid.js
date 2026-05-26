import React from 'react';

export const LanUserVisorSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M334 176c-18.5 42.4-60.8 72-110 72s-91.5-29.6-110-72h-2c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h22.6c22-24.6 53.9-40 89.4-40s67.5 15.4 89.4 40H336c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32zM16 482.3C16 383.8 95.8 304 194.3 304h59.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H45.7C29.3 512 16 498.7 16 482.3M132 112c0 11 9 20 20 20h144c11 0 20-9 20-20s-9-20-20-20H152c-11 0-20 9-20 20m179.7 272.7L276.5 455c-4 8 4.5 16.5 12.5 12.5l26.8-13.4c2.6-1.3 5.7-1.3 8.3 0l26.9 13.4c8 4 16.5-4.5 12.5-12.5l-35.1-70.3c-3.4-6.9-13.3-6.9-16.7 0"})
);

export default LanUserVisorSolid;
