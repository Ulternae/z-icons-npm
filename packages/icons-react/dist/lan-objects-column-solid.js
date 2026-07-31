import React from 'react';

export const LanObjectsColumnSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 32C21.5 32 0 53.5 0 80v160c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm256 192c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM0 400v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48M304 32c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"})
);

export default LanObjectsColumnSolid;
