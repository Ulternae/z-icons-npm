import React from 'react';

export const LanArrowLeftLongToLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M265.4 105.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L237.3 224H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H237.3l73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3zM0 128c0-17.7 14.3-32 32-32s32 14.3 32 32v256c0 17.7-14.3 32-32 32S0 401.7 0 384z"})
);

export default LanArrowLeftLongToLineSolid;
