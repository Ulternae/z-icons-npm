import React from 'react';

export function LanSendBackwardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h48V224c0-61.9 50.1-112 112-112h128V64c0-35.3-28.7-64-64-64zm160 208h224c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16m-64 16v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"})
  );
}

export default LanSendBackwardRegular;
