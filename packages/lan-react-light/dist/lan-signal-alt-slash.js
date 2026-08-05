import React from 'react';

export function LanSignalAltSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.85 576 575.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L512 457.5V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v377.5L373.3 318.8V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v142.8zM202.7 272v192c0 8.8 7.2 16 16 16s16-7.2 16-16V293.2l-29.6-29.6c-1.5 2.4-2.4 5.3-2.4 8.4m138.6 192c0 8.8 7.2 16 16 16s16-7.2 16-16v-32.2l-32-32zM96 400c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
  );
}

export default LanSignalAltSlash;
