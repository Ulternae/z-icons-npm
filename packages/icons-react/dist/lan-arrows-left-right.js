import React from 'react';

export const LanArrowsLeftRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m459.3 379.3 112-112c6.2-6.2 6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l84.7 84.7H54.7l84.7-84.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-112 112c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l112 112c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.7 272h466.7l-84.7 84.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0"})
);

export default LanArrowsLeftRight;
