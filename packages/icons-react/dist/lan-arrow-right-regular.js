import React from 'react';

export const LanArrowRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M505 273c9.4-9.4 9.4-24.6 0-33.9L337 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l127 127H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h406.1l-127 127c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
);

export default LanArrowRightRegular;
