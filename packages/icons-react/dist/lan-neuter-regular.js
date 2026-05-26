import React from 'react';

export const LanNeuterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 176a128 128 0 1 1 256 0 128 128 0 1 1-256 0m152 174.4c85.8-11.7 152-85.3 152-174.4C368 78.8 289.2 0 192 0S16 78.8 16 176c0 89.1 66.2 162.7 152 174.4V488c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanNeuterRegular;
