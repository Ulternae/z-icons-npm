import React from 'react';

export const LanClockDeskRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 224a176 176 0 1 1 352 0 176 176 0 1 1-352 0m352 138.6V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-85.4c41 52 104.6 85.4 176 85.4s135-33.4 176-85.4M448 224C448 100.3 347.7 0 224 0S0 100.3 0 224v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM224 96c-13.3 0-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V120c0-13.3-10.7-24-24-24z"})
);

export default LanClockDeskRegular;
