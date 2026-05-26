import React from 'react';

export const LanVideoCameraThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm505.6 267.2L464 340v-20l83.2 62.4c1.4 1 3.1 1.6 4.8 1.6 4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8-1.7 0-3.4.6-4.8 1.6L464 192v-20l73.6-55.2c4.2-3.1 9.2-4.8 14.4-4.8 13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24-5.2 0-10.2-1.7-14.4-4.8"})
);

export default LanVideoCameraThin;
