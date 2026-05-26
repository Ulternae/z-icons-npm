import React from 'react';

export const LanArrowLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H54.6L203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"})
);

export default LanArrowLeft;
