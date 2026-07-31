import React from 'react';

export const LanSquareTugrikThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 40c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96v84.9l61.5-20.5c4.2-1.4 8.7.9 10.1 5.1s-.9 8.7-5.1 10.1L232 245.8v47.1l61.5-20.5c4.2-1.4 8.7.9 10.1 5.1s-.9 8.7-5.1 10.1L232 309.8V376c0 4.4-3.6 8-8 8s-8-3.6-8-8v-60.9l-61.5 20.5c-4.2 1.4-8.7-.9-10.1-5.1s.9-8.7 5.1-10.1l66.5-22.2v-47.1l-61.5 20.5c-4.2 1.4-8.7-.9-10.1-5.1s.9-8.7 5.1-10.1l66.5-22.2V144h-96c-4.4 0-8-3.6-8-8"})
);

export default LanSquareTugrikThin;
