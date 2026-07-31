import React from 'react';

export const LanTireSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 256c0-39.2-15.7-74.7-41.1-100.7L330.1 195c13.7 16.6 21.9 37.8 21.9 61 0 2-.1 4-.2 6l46.6 15.2c1-6.9 1.5-14 1.5-21.2zm-63.1 51.6c-12.9 20.2-33.2 35.2-57 41.3v49c45.1-7.6 83.1-36.1 103.6-75.2l-46.6-15.2zM232 349c-23.8-6.1-44-21.2-56.9-41.3l-46.6 15.2C149 362 187 390.5 232.1 398.1v-49zm-120-93c0 7.2.5 14.3 1.5 21.2l46.7-15.2c-.1-2-.2-4-.2-6 0-23.2 8.2-44.4 21.9-61l-28.8-39.7c-25.4 26-41.1 61.5-41.1 100.7m144-96c12.5 0 24.4 2.4 35.4 6.7l28.8-39.7c-19.3-9.6-41.1-15-64.2-15s-44.8 5.4-64.1 15l28.8 39.7c10.9-4.3 22.9-6.7 35.4-6.7zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanTireSolid;
