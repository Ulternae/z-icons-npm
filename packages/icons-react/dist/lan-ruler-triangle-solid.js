import React from 'react';

export const LanRulerTriangleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M86.6 9.4C77.5.2 63.7-2.5 51.8 2.4S32 19.1 32 32v416c0 17.7 14.3 32 32 32h416c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-31-31-14.6 14.6c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l14.6-14.6-46.1-46.1-38.6 38.6c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l38.6-38.6-46.1-46.1-14.6 14.6c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l14.6-14.6-46.1-46.1-38.6 38.6c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l38.5-38.6-46.1-46.1L137 89c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6-.1-34l14.6-14.6zM160 263.8l88.2 88.2H160z"})
);

export default LanRulerTriangleSolid;
