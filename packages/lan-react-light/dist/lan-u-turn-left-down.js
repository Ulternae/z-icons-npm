import React from 'react';

export function LanUTurnLeftDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160.5 512c-9.7 0-16.7-4.4-21.5-8.3l-1.1-1-112-112C5.7 370.5 20.3 336 48.5 336h48V208c0-114.9 93.1-208 208-208s208 93.1 208 208v208l-.2 3.3c-1.6 16.1-15.3 28.7-31.8 28.7h-64l-3.3-.2c-16.1-1.6-28.7-15.3-28.7-31.8V208c0-44.2-35.8-80-80-80s-80 35.8-80 80v128h48c28.1 0 42.7 34.5 22.6 54.6l-112 112-1.1 1c-4.8 3.9-11.8 8.3-21.5 8.3zm.8-32.8L272.5 368h-64c-8.8 0-16-7.2-16-16V208c0-61.9 50.1-112 112-112s112 50.2 112 112v208h64V208c0-97.2-78.8-176-176-176s-176 78.8-176 176v144c0 8.8-7.2 16-16 16h-64l111.2 111.2c.3.3.6.4.8.6.2-.1.5-.3.8-.6"})
  );
}

export default LanUTurnLeftDown;
