import React from 'react';

export const LanMehRollingEyes = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192 96h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16m-32-80c26.5 0 48-21.5 48-48 0-18.8-10.9-35.2-26.7-43 1.7 3.3 2.7 7 2.7 11 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-4 1-7.7 2.7-11-15.8 7.9-26.7 24.2-26.7 43 0 26.5 21.5 48 48 48m0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160m240 80c0-18.8-10.9-35.2-26.7-43 1.7 3.3 2.7 7 2.7 11 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-4 1-7.7 2.7-11-15.8 7.9-26.7 24.2-26.7 43 0 26.5 21.5 48 48 48s48-21.5 48-48m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanMehRollingEyes;
