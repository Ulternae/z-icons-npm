import React from 'react';

export function LanUTurnDownLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 527.933',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 384c0 8.1 3.6 16.8 9.3 22.6l112 112c20.8 20.8 52.7 4 54.6-22.6v-48h128c114.9 0 208-93.1 208-208S418.9 32 304 32H96c-17.4.8-32 13.9-32 32v64c.8 17.4 13.9 32 32 32h208c44.2 0 80 35.8 80 80s-35.8 80-80 80H176v-48c0-12.9-7.8-24.6-19.7-29.6-11.9-4.9-25.7-2.2-34.9 6.9l-112 112C3.6 367.2 0 375.9 0 384m16 0c0-4.1 1.6-7.5 5.1-11.7l111.6-111.6c10-10 27.3-2.8 27.3 11.3v56c0 4.4 3.6 8 8 8h136c53 0 96-43 96-96s-43-96-96-96H96c-9.4 0-15.2-7.4-16-16V64c0-9.4 7.4-15.2 16-16h208c106 0 192 86 192 192s-86 192-192 192H168c-4.2 0-8 3.8-8 8v56c-1 13.3-16.9 21.7-27.3 11.3L21 395.6c-2.9-3.6-4.5-7.1-5-11.6"})
  );
}

export default LanUTurnDownLeftThin;
