import React from 'react';

export const LanCheeseSwissRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 256v-15.8C464 151.7 392.3 80 303.8 80c-.8 0-1.6.2-2.3.7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2c-3.3 2.2-5.3 5.9-5.3 9.8h274.7c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32zM48 304v112c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V304h-60.2c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16zm464-63.8V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2M176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanCheeseSwissRegular;
