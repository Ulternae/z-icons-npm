import React from 'react';

export const LanStockingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 16c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V32c0-8.8-7.2-16-16-16zM64 32C64 14.3 78.3 0 96 0h256c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32v203.5c0 42.8-21.4 82.8-57 106.5l-104.1 69.4c-20.1 13.4-43.8 20.6-68.1 20.6C55 512 0 457 0 389.2V387c0-41.8 20.9-80.9 55.7-104.1l26.1-17.4c8.9-5.9 14.2-15.9 14.2-26.6V112c-17.7 0-32-14.3-32-32zm48 80v126.9c0 16-8 31-21.4 39.9l-26 17.4C34.2 316.4 16 350.5 16 386.9v2.2c0 59 47.8 106.8 106.8 106.8 21.1 0 41.7-6.2 59.3-17.9l104.1-69.4c31.2-20.8 49.9-55.7 49.9-93.2V111.9h-224z"})
);

export default LanStockingThin;
