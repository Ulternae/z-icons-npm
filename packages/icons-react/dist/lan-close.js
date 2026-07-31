import React from 'react';

export const LanClose = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M379.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 27.3 68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 4.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6l164.7 164.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256z"})
);

export default LanClose;
