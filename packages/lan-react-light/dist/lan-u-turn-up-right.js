import React from 'react';

export function LanUTurnUpRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -15.931 512 527.931',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 128c0-9.7-4.4-16.7-8.3-21.5l-1-1.1-112-112C370.5-26.7 336-12.1 336 16v48H208C93.1 64 0 157.1 0 272s93.1 208 208 208h208l3.3-.2c16.1-1.6 28.7-15.3 28.7-31.8v-64l-.2-3.3c-1.6-16.1-15.2-28.7-31.8-28.7H208c-44.2 0-80-35.8-80-80s35.8-80 80-80h128v48c0 28.1 34.5 42.7 54.6 22.6l112-112 1-1.1c3.9-4.8 8.3-11.8 8.3-21.5zm-32.8.8L368 240v-64c0-8.8-7.2-16-16-16H208c-61.9 0-112 50.1-112 112s50.2 112 112 112h208v64H208c-97.2 0-176-78.8-176-176S110.8 96 208 96h144c8.8 0 16-7.2 16-16V16l111.2 111.2c.3.3.4.6.6.8-.1.2-.3.5-.6.8"})
  );
}

export default LanUTurnUpRight;
