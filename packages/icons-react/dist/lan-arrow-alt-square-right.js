import React from 'react';

export const LanArrowAltSquareRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zm-32-64c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM240 171.3V208c0 8.8-7.2 16-16 16h-88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h88c8.8 0 16 7.2 16 16v36.7l84.7-84.7zm9 205.7c-6.9 6.9-17.2 8.9-26.2 5.2S208 369.7 208 360v-40h-72c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h72v-40c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l104 104c9.4 9.4 9.4 24.6 0 33.9z"})
);

export default LanArrowAltSquareRight;
