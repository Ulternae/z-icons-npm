import React from 'react';

export function LanUTurnDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 527.931',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 384c0 9.7 4.4 16.7 8.3 21.5l1 1.1 112 112c20.1 20.1 54.6 5.5 54.6-22.6v-48h128c114.9 0 208-93.1 208-208S418.9 32 304 32H96l-3.3.2C76.6 33.8 64 47.4 64 64v64l.2 3.3C65.8 147.4 79.4 160 96 160h208c44.2 0 80 35.8 80 80s-35.8 80-80 80H176v-48c0-28.1-34.5-42.7-54.6-22.6l-112 112-1 1.1C4.4 367.3 0 374.3 0 384m32.8-.8L144 272v64c0 8.8 7.2 16 16 16h144c61.8 0 112-50.1 112-112s-50.2-112-112-112H96V64h208c97.2 0 176 78.8 176 176s-78.8 176-176 176H160c-8.8 0-16 7.2-16 16v64L32.8 384.8c-.3-.3-.4-.6-.6-.8.1-.2.3-.5.6-.8"})
  );
}

export default LanUTurnDownLeft;
