import React from 'react';

export const LanThListRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 80v88h224V96c0-8.8-7.2-16-16-16zm-48 0H64c-8.8 0-16 7.2-16 16v72h80zM0 216V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm48 80h80v-80H48zm0 48v72c0 8.8 7.2 16 16 16h64v-88zm128 88h208c8.8 0 16-7.2 16-16v-72H176zm224-136v-80H176v80z"})
);

export default LanThListRegular;
