import React from 'react';

export const LanRightLongToLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S320 115.1 320 128v64H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h272v64c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128zM640 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32z"})
);

export default LanRightLongToLineSolid;
