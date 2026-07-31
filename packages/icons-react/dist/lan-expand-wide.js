import React from 'react';

export const LanExpandWide = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 64c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM0 304c0-8.8 7.2-16 16-16s16 7.2 16 16v112h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM496 64c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V96H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 240c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h112z"})
);

export default LanExpandWide;
