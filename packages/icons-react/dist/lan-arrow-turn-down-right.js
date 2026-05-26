import React from 'react';

export const LanArrowTurnDownRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80v96c0 53 43 96 96 96h361.4L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240H96c-35.3 0-64-28.7-64-64z"})
);

export default LanArrowTurnDownRight;
