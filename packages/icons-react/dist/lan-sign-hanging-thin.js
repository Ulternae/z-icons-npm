import React from 'react';

export const LanSignHangingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 0c4.4 0 8 3.6 8 8v72h408c4.4 0 8 3.6 8 8s-3.6 8-8 8H96v408c0 4.4-3.6 8-8 8s-8-3.6-8-8V96H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h72V8c0-4.4 3.6-8 8-8m104 176c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"})
);

export default LanSignHangingThin;
