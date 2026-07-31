import React from 'react';

export const LanBrushThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 352c-8.8 0-16 7.2-16 16v80c0 26.5-21.5 48-48 48s-48-21.5-48-48v-80c0-8.8-7.2-16-16-16H80c-35.3 0-64-28.7-64-64v-16h352v16c0 35.3-28.7 64-64 64zm112-96H16V64c0-26.5 21.5-48 48-48h16v104c0 4.4 3.6 8 8 8s8-3.6 8-8V16h80v72c0 4.4 3.6 8 8 8s8-3.6 8-8V16h64v88c0 4.4 3.6 8 8 8s8-3.6 8-8V16h48c26.5 0 48 21.5 48 48zM80 368h48v80c0 35.3 28.7 64 64 64s64-28.7 64-64v-80h48c44.2 0 80-35.8 80-80V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 44.2 35.8 80 80 80m128 80c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16"})
);

export default LanBrushThin;
