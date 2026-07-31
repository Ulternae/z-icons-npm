import React from 'react';

export const LanHammerWarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 0c17.7 0 32 14.3 32 32v27.4l155.5-22.2c19.3-2.7 36.5 12.2 36.5 31.7v182.2c0 19.5-17.2 34.4-36.5 31.7l-183-26.1c-3-.4-6-.4-9.1 0L36.5 282.8C17.2 285.5 0 270.6 0 251.1V68.9c0-19.5 17.2-34.4 36.5-31.7L192 59.4V32c0-17.7 14.3-32 32-32m0 304.5 32 4.6V512c0 17.7-14.3 32-32 32s-32-14.3-32-32V309.1z"})
);

export default LanHammerWarSolid;
