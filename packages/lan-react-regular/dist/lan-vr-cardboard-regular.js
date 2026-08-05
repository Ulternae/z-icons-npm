import React from 'react';

export function LanVrCardboardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 144H64c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h117.5c4.2 0 8.3-1.7 11.3-4.7l33.9-33.9C243 313.1 265 304 288 304s45 9.1 61.3 25.4l33.9 33.9c3 3 7.1 4.7 11.3 4.7H512c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16M64 96h448c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H394.5c-17 0-33.3-6.7-45.3-18.7l-33.9-33.9c-7.2-7.2-17.1-11.3-27.3-11.3s-20.1 4.1-27.3 11.3l-33.9 33.9c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m48 152a56 56 0 1 1 112 0 56 56 0 1 1-112 0m296-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
  );
}

export default LanVrCardboardRegular;
