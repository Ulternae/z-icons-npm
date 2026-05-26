import React from 'react';

export const LanForwardStepSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M21 36.8c12.9-7 28.7-6.3 41 1.8l258 169.5V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V303.9L62 473.5c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440V72c0-14.7 8.1-28.2 21-35.2"})
);

export default LanForwardStepSolid;
