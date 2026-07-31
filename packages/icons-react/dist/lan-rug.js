import React from 'react';

export const LanRug = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 64C7.2 64 0 71.2 0 80s7.2 16 16 16h16v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm48 32h64v320H64zm384 0h64v320h-64zm-32 0v320H160V96z"})
);

export default LanRug;
