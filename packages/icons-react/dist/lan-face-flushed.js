import React from 'react';

export const LanFaceFlushed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M192 368h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16m-32-96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160m240 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-128 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanFaceFlushed;
