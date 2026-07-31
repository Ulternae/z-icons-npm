import React from 'react';

export const LanCirclesOverlapThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 208c0 106-86 192-192 192-2.1 0-4.3 0-6.4-.1-16.3-28.2-25.6-61-25.6-95.9 0-106 86-192 192-192 2.1 0 4.3 0 6.4.1 16.3 28.2 25.6 61 25.6 95.9M364 96c-113 2.1-204 94.4-204 208 0 34 8.1 66 22.6 94.3C88.6 385.9 16 305.4 16 208c0-106 86-192 192-192 64.3 0 121.1 31.6 156 80m19.7.5C346.8 38.5 281.9 0 208 0 93.1 0 0 93.1 0 208c0 109.6 84.8 199.4 192.3 207.4C229.2 473.5 294.1 512 368 512c114.9 0 208-93.1 208-208 0-109.6-84.8-199.4-192.3-207.4zm9.8 17.1c94 12.4 166.6 92.9 166.6 190.3 0 106-86 192-192 192-64.3 0-121.1-31.6-156-80 113-2.1 204-94.4 204-208 0-34-8.1-66-22.6-94.3"})
);

export default LanCirclesOverlapThin;
