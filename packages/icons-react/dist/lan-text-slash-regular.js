import React from 'react';

export const LanTextSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-251-251 46.6-172.1h124.7l-8.5 34.2c-3.2 12.9 4.6 25.9 17.5 29.1s25.9-4.6 29.1-17.5l11-44.1c6.3-25.3-12.8-49.8-38.8-49.8h-335c-17.7 0-33.2 11.6-38.3 28.4zM165.8 99.9l5-19.9h144.1l-36 132.9-113-113zm84.1 219.8L219.5 432H160c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24h-50.8l19.8-73.2z"})
);

export default LanTextSlashRegular;
