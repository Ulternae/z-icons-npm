import React from 'react';

export const LanUTurnUpLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.931 512 527.931',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-9.7 4.4-16.7 8.3-21.5l1-1.1 112-112C141.5-26.7 176-12.1 176 16v48h128c114.9 0 208 93.1 208 208s-93.1 208-208 208H96l-3.3-.2C76.6 478.2 64 464.6 64 448v-64l.2-3.3C65.8 364.6 79.4 352 96 352h208c44.2 0 80-35.8 80-80s-35.8-80-80-80H176v48c0 28.1-34.5 42.7-54.6 22.6l-112-112-1-1.1C4.4 144.7 0 137.7 0 128m32.8.8L144 240v-64c0-8.8 7.2-16 16-16h144c61.8 0 112 50.1 112 112s-50.2 112-112 112H96v64h208c97.2 0 176-78.8 176-176S401.2 96 304 96H160c-8.8 0-16-7.2-16-16V16L32.8 127.2c-.3.3-.4.6-.6.8.1.2.3.5.6.8"})
);

export default LanUTurnUpLeft;
