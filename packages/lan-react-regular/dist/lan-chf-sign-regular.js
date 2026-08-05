import React from 'react';

export function LanChfSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 147.3C0 101 38.2 64 83.9 64c30.9 0 59.6 17.4 73.6 45.3 5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7c-5.7-11.4-17.7-18.8-30.7-18.8-19.8 0-35.9 16.1-35.9 35.3v217.3c0 19.2 16.1 35.3 35.9 35.3 13 0 25-7.4 30.6-18.7 5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2c-13.9 27.9-42.7 45.3-73.5 45.3C38.2 448 0 411 0 364.7zM216 64c13.3 0 24 10.7 24 24v136h128V88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H240v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24m232 24c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H496v112h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v152c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
  );
}

export default LanChfSignRegular;
