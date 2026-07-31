import React from 'react';

export const LanAccentGraveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M108.3 204.8 41.2 95c-6-9.8-9.2-21.2-9.2-32.7C32 28.1 59.8 0 94 0c29.2 0 54.4 20.4 60.5 49l27.1 126.6c5.3 24.9-13.7 48.4-39.2 48.4-14 0-26.9-7.3-34.2-19.2z"})
);

export default LanAccentGraveSolid;
