import React from 'react';

export const LanArrowLeftToDottedLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m105.4 169.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H237.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128zM0 202.7a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 74.7a32 32 0 1 0 0 64 32 32 0 1 0 0-64M0 416a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
);

export default LanArrowLeftToDottedLineSolid;
