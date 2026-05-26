import React from 'react';

export const LanBowlShavedIceRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 192c0 5.4-.3 10.7-.9 16h48.2c.4-5.3.7-10.6.7-16C416 86 330 0 224 0S32 86 32 192c0 5.4.2 10.7.7 16h48.2c-.6-5.3-.9-10.6-.9-16 0-79.5 64.5-144 144-144s144 64.5 144 144M24 256c-13.3 0-24 10.7-24 24v8c0 71.7 55.5 130.4 125.9 135.6l-20.4 56.2c-2.7 7.4-1.6 15.6 2.9 22S120.2 512 128 512h192c7.8 0 15.2-3.8 19.7-10.2s5.6-14.6 2.9-22l-20.4-56.2C392.5 418.4 448 359.7 448 288v-8c0-13.3-10.7-24-24-24zm112 120c-43.1 0-79-31-86.5-72h349.1c-7.5 41-43.4 72-86.6 72h-24c-7.8 0-15.2 3.8-19.7 10.2s-5.6 14.6-2.9 22l20.3 55.8H162.2l20.3-55.8c2.7-7.4 1.6-15.6-2.9-22S167.8 376 160 376z"})
);

export default LanBowlShavedIceRegular;
