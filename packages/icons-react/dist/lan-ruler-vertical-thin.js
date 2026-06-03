import React from 'react';

export const LanRulerVerticalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 256 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 496V16c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v48H136c-4.4 0-8 3.6-8 8s3.6 8 8 8h104v80h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v72H136c-4.4 0-8 3.6-8 8s3.6 8 8 8h104v72h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v80H136c-4.4 0-8 3.6-8 8s3.6 8 8 8h104v48c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32M256 72V16c0-26.5-21.5-48-48-48H48C21.5-32 0-10.5 0 16v480c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"})
);

export default LanRulerVerticalThin;
