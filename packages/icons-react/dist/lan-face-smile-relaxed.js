import React from 'react';

export const LanFaceSmileRelaxed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m158.7 67.1C182.2 350.6 217 368 256 368s73.8-17.4 97.3-44.9c5.7-6.7 15.8-7.5 22.6-1.8s7.5 15.8 1.8 22.6c-29.3 34.3-73 56.1-121.7 56.1s-92.4-21.8-121.7-56.1c-5.7-6.7-5-16.8 1.8-22.6s16.8-5 22.6 1.8M168 192c-13.3 0-24 10.7-24 24 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-13.3-10.7-24-24-24zm136 24c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24"})
);

export default LanFaceSmileRelaxed;
