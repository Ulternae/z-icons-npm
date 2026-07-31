import React from 'react';

export const LanYinYang = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256c0 123.7-100.3 224-224 224-57.4 0-104-46.6-104-104s46.6-104 104-104c75.1 0 136-60.9 136-136 0-26.5-7.6-51.2-20.6-72C436.5 103.2 480 174.5 480 256M256 32c57.4 0 104 46.6 104 104s-46.6 104-104 104c-75.1 0-136 60.9-136 136 0 26.5 7.6 51.2 20.6 72C75.5 408.8 32 337.5 32 256 32 132.3 132.3 32 256 32m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-136a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24-216a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanYinYang;
