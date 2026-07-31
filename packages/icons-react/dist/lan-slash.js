import React from 'react';

export const LanSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M4.7-27.3c6.2-6.2 16.4-6.2 22.6 0l544 544c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L4.7-4.7c-6.2-6.2-6.2-16.4 0-22.6"})
);

export default LanSlash;
