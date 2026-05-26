import React from 'react';

export const LanHeadphonesSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-70.3-70.3c8.5-14.3 13.3-31 13.3-48.8v-160C512 100.3 411.7 0 288 0c-61.4 0-117 24.7-157.5 64.7zM164.5 98.6C196.2 67.3 239.9 48 288 48c97.2 0 176 78.8 176 176v44.8c-14.1-8.2-30.5-12.8-48-12.8h-16c-21.1 0-39.1 13.7-45.5 32.7l-190-190zM400 334.2V304h16c26.5 0 48 21.5 48 48v32c0 4.3-.6 8.5-1.6 12.5zm-212.4-76.8c-3.7-.9-7.6-1.4-11.6-1.4h-16c-17.5 0-33.9 4.7-48 12.8V224c0-13.1 1.4-25.8 4.1-38.1l-38.6-38.6C68.8 171.2 64 197.1 64 224v160c0 53 43 96 96 96h16c26.5 0 48-21.5 48-48V304c0-4-.5-7.9-1.4-11.6zM112 368v-16c0-26.5 21.5-48 48-48h16v128h-16c-26.5 0-48-21.5-48-48z"})
);

export default LanHeadphonesSlashRegular;
