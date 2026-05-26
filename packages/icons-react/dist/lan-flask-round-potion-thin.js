import React from 'react';

export const LanFlaskRoundPotionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 16h24v129.4C45.9 175.7 0 242.5 0 320c0 106 86 192 192 192s192-86 192-192c0-77.5-45.9-144.3-112-174.6V16h24c4.4 0 8-3.6 8-8s-3.6-8-8-8H88c-4.4 0-8 3.6-8 8s3.6 8 8 8m40 134.6V16h128v134.6c0 3.2 1.9 6.1 4.9 7.4 63 26.8 107.1 89.3 107.1 162 0 5.4-.2 10.7-.7 16h-60.1c-31.3 0-61.8-10.7-86.2-30.2-27.3-21.8-61.2-33.8-96.2-33.8h-1.6c-29.7 0-58.8 8.4-84 24.1l-22.9 14.3C20 241.8 63 183.6 123.2 158c3-1.3 4.9-4.2 4.9-7.4zM16.2 329.3l4-2.5 27.4-17.1c22.7-14.2 48.9-21.7 75.6-21.7h1.6c31.3 0 61.8 10.7 86.2 30.2 27.3 21.8 61.2 33.8 96.2 33.8h57.9c-15 81.9-86.8 144-173.1 144-94.1 0-170.9-73.8-175.8-166.7"})
);

export default LanFlaskRoundPotionThin;
