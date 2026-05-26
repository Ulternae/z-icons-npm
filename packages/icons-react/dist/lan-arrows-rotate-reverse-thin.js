import React from 'react';

export const LanArrowsRotateReverseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v145.3c0 2.1.8 4.2 2.3 5.7s3.5 2.3 5.7 2.3h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H27.3l59-59C180-7.4 332-7.4 425.7 86.3c44.9 44.9 68.3 103.1 70.2 162 .1 4.4 3.8 7.9 8.2 7.7s7.9-3.8 7.7-8.3C509.9 185 484.9 122.9 437 75 337-25 175-25 75 75l-59 59zm480 496c0 4.4 3.6 8 8 8s8-3.6 8-8V358.7c0-2.1-.8-4.2-2.3-5.7s-3.5-2.3-5.7-2.3H360c-4.4 0-8 3.6-8 8s3.6 8 8 8h124.7l-59 59c-93.7 93.7-245.7 93.7-339.4 0-44.9-44.9-68.3-103.1-70.2-162-.1-4.4-3.8-7.9-8.3-7.7S0 259.8.1 264.2C2.1 327 27.1 389.1 75 437c100 100 262 100 362 0l59-59z"})
);

export default LanArrowsRotateReverseThin;
