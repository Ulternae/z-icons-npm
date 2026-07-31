import React from 'react';

export const LanBoxArchive = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM0 112c0 20.9 13.4 38.7 32 45.3V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V157.3c18.6-6.6 32-24.4 32-45.3V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80zm64 304V160h384v256c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32m112-192c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanBoxArchive;
