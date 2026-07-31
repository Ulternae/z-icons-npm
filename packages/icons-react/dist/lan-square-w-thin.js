import React from 'react';

export const LanSquareWThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm127.7 69.9 40.9 149.9 47.8-150.2c1.1-3.3 4.1-5.6 7.6-5.6s6.6 2.3 7.6 5.6l47.8 150.2 40.9-149.9c1.2-4.3 5.6-6.8 9.8-5.6s6.8 5.6 5.6 9.8l-48 176c-.9 3.4-4 5.8-7.6 5.9s-6.7-2.2-7.8-5.6l-48.4-152-48.4 152c-1.1 3.4-4.2 5.6-7.8 5.6s-6.6-2.5-7.6-5.9l-48-176c-1.2-4.3 1.4-8.7 5.6-9.8s8.7 1.4 9.8 5.6z"})
);

export default LanSquareWThin;
