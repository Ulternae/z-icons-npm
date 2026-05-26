import React from 'react';

export const LanPowerOffThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M264-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v280c0 4.4 3.6 8 8 8s8-3.6 8-8zM155.4 38c4-1.9 5.8-6.6 3.9-10.6s-6.6-5.8-10.6-3.9C60.9 64.1 0 152.9 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256c0-103.1-60.9-191.9-148.7-232.5-4-1.9-8.8-.1-10.6 3.9s-.1 8.8 3.9 10.6C438.9 76.1 496 159.4 496 256c0 132.5-107.5 240-240 240S16 388.5 16 256c0-96.6 57.1-179.9 139.4-218"})
);

export default LanPowerOffThin;
