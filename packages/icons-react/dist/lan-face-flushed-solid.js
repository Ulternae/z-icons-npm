import React from 'react';

export const LanFaceFlushedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m168 136c0 13.3 10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24H192c-13.3 0-24 10.7-24 24m-8-96a72 72 0 1 0 0-144 72 72 0 1 0 0 144m264-72a72 72 0 1 0-144 0 72 72 0 1 0 144 0m-288 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m192 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanFaceFlushedSolid;
