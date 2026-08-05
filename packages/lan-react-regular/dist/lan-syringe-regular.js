import React from 'react';

export function LanSyringeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -24.05 576 536.05',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M497.5-17c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15L432.5 78l-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l7 7-229.7 229.7a55.92 55.92 0 0 0-16.4 39.6V414l-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h88.8c14.9 0 29.1-5.9 39.6-16.4l229.7-229.7 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63 46.1-46.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64zm-42.9 185L224.9 397.7c-1.5 1.5-3.5 2.3-5.7 2.3h-74.7v-74.7c0-2.1.8-4.2 2.3-5.7l37.7-37.7 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 62.1-62.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 62.1-62.1z"})
  );
}

export default LanSyringeRegular;
