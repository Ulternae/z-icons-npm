import React from 'react';

export function LanSquareLitecoinThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184 32c4.4 0 8 3.6 8 8v90.2l77.5-25.8c4.2-1.4 8.7.9 10.1 5.1s-.9 8.7-5.1 10.1L192 243.1V368h120c4.4 0 8 3.6 8 8s-3.6 8-8 8H184c-2.1 0-4.2-.8-5.7-2.3s-2.3-3.5-2.3-5.7V248.4l-45.5 15.2c-4.2 1.4-8.7-.9-10.1-5.1s.9-8.7 5.1-10.1l50.5-16.8V136c0-4.4 3.6-8 8-8"})
  );
}

export default LanSquareLitecoinThin;
