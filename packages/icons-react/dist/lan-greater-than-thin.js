import React from 'react';

export const LanGreaterThanThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32.7 36.6c-1.9 4-.1 8.8 3.9 10.6L485 256 36.6 464.8c-4 1.9-5.7 6.6-3.9 10.6s6.6 5.7 10.6 3.9l464-216c2.8-1.3 4.6-4.1 4.6-7.3s-1.8-5.9-4.6-7.3l-464-216c-4-1.9-8.8-.1-10.6 3.9"})
);

export default LanGreaterThanThin;
