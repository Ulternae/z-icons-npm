import React from 'react';

export const LanFlatbreadThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m357.7-90.3-192 192c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l192-192c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3m-112-59.3c3.1 3.1 3.1 8.2 0 11.3l-128 128c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l128-128c3.1-3.1 8.2-3.1 11.3 0m160 171.3-128 128c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l128-128c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3"})
);

export default LanFlatbreadThin;
