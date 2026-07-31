import React from 'react';

export const LanArrowAltSquareLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 416c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zm32 64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm144-139.3V304c0-8.8 7.2-16 16-16h88c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-88c-8.8 0-16-7.2-16-16v-36.7L123.3 256zM199 135c6.9-6.9 17.2-8.9 26.2-5.2S240 142.3 240 152v40h72c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-72v40c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2L95 273c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanArrowAltSquareLeft;
