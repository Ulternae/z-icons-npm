import React from 'react';

export const LanPrintSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.025 -32.125 576.025 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M2.3-29.8c3.1-3.1 8.2-3.1 11.3 0L112 68.6V64c0-35.3 28.7-64 64-64h181.5c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3V144h-16v-37.5c0-12.7-5.1-24.9-14.1-33.9l-42.5-42.5c-9-9-21.2-14.1-33.9-14.1H176c-26.5 0-48 21.5-48 48v20.6L235.4 192H480c35.3 0 64 28.7 64 64v128c0 17.7-14.3 32-32 32h-52.6l114.2 114.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L2.3-18.4c-3.1-3.1-3.1-8.2 0-11.3zM443.4 400H512c8.8 0 16-7.2 16-16V256c0-26.5-21.5-48-48-48H251.4zm-138.6-48H144c-8.8 0-16 7.2-16 16v112c0 8.8 7.2 16 16 16h288c4.6 0 8.8-2 11.7-5.1l11.3 11.3c-5.8 6-14 9.8-23 9.8H144c-17.7 0-32-14.3-32-32v-64H64c-17.7 0-32-14.3-32-32V256c0-35.3 28.7-64 64-64h48.8l16 16H96c-26.5 0-48 21.5-48 48v128c0 8.8 7.2 16 16 16h48v-32c0-17.7 14.3-32 32-32h144.8zM456 268a12 12 0 1 1 24 0 12 12 0 1 1-24 0"})
);

export default LanPrintSlashThin;
