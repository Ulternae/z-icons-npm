import React from 'react';

export function LanFaxRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 64c0-8.8 7.2-16 16-16h159.4c4.2 0 8.3 1.7 11.3 4.7l48.6 48.6c3 3 4.7 7.1 4.7 11.3V144h48v-31.4c0-17-6.7-33.3-18.7-45.3l-48.6-48.6C368.7 6.7 352.4 0 335.4 0H176c-35.3 0-64 28.7-64 64v64H40c-22.1 0-40 17.9-40 40v272c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40H160zm-48 112v256H48V176zm48 256V240h304v192zm72-120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m64-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m64-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanFaxRegular;
