import React from 'react';

export const LanArrowUpToArc = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32c123.7 0 224 100.3 224 224 0 8.8 7.2 16 16 16s16-7.2 16-16C512 114.6 397.4 0 256 0S0 114.6 0 256c0 8.8 7.2 16 16 16s16-7.2 16-16C32 132.3 132.3 32 256 32m123.3 244.7-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l84.7-84.7V496c0 8.8 7.2 16 16 16s16-7.2 16-16V214.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6"})
);

export default LanArrowUpToArc;
