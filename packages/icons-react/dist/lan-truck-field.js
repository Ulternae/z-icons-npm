import React from 'react';

export const LanTruckField = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 64c17.7 0 32 14.3 32 32v256H230.4c-14.6-28.5-44.2-48-78.4-48-33.8 0-63.1 19-77.8 46.9-6-2.3-10.2-8.1-10.2-14.9V96c0-17.7 14.3-32 32-32zM32 128c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32v48c0 21.1 13.7 39.1 32.6 45.5-.4 3.4-.6 7-.6 10.5 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h144.7c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h.4c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48h-28.5l-32.2-73.7C489 111.1 466 96 440.6 96H416c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64zm440 176c-21.3 0-40.8 7.5-56 20.1V240h144c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16h-9.6c-14.6-28.5-44.2-48-78.4-48m24.5-96H416v-80h24.6c12.7 0 24.2 7.5 29.3 19.2zM96 392a56 56 0 1 1 112 0 56 56 0 1 1-112 0m376-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanTruckField;
