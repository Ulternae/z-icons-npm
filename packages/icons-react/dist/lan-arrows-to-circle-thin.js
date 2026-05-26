import React from 'react';

export const LanArrowsToCircleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M498.3 509.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L347.3 336H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8v-92.7l162.3 162.3zM184 64c-4.4 0-8 3.6-8 8v92.7L13.7 2.3C10.5-.8 5.5-.8 2.3 2.3s-3.1 8.2 0 11.3L164.7 176H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8M509.7 2.3c-3.1-3.1-8.2-3.1-11.3 0L336 164.7V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8h-92.7L509.6 13.7c3.1-3.1 3.1-8.2 0-11.3zM72 336h92.7L2.4 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L176 347.3V440c0 4.4 3.6 8 8 8s8-3.6 8-8V328c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8s3.6 8 8 8m184-120a40 40 0 1 1 0 80 40 40 0 1 1 0-80m0 96a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanArrowsToCircleThin;
