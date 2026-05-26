import React from 'react';

export const LanFlorinSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M322.4 32c-32.1 0-61.2 19.2-73.7 48.8L188.2 224H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h126.6l-68.8 162.7C98.3 436.5 80.9 448 61.6 448H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h45.6c32.1 0 61.2-19.2 73.7-48.8L209.4 256H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H222.9l55.3-130.7c7.5-17.8 24.9-29.3 44.2-29.3H368c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanFlorinSign;
