import React from 'react';

export const LanStockingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 96H144v142.9c0 26.7-13.4 51.7-35.6 66.6l-26.1 17.3C60.9 337.1 48 361.2 48 386.9v2.2c0 41.3 33.5 74.8 74.8 74.8 14.8 0 29.2-4.4 41.5-12.6l104.1-69.4c22.3-14.8 35.6-39.8 35.6-66.6zM96 96c-17.7 0-32-14.3-32-32V32C64 14.3 78.3 0 96 0h256c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32v219.5c0 42.8-21.4 82.8-57 106.5l-104.1 69.4c-20.1 13.4-43.8 20.6-68.1 20.6C55 512 0 457 0 389.2V387c0-41.8 20.9-80.9 55.7-104.1l26.1-17.4c8.9-5.9 14.2-15.9 14.2-26.6z"})
);

export default LanStockingRegular;
