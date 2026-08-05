import React from 'react';

export function LanShuttersSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32L3.8 146.7c-2.5 4.5-3.8 9.6-3.8 14.8C0 178.3 13.7 192 30.5 192h387c16.8 0 30.5-13.7 30.5-30.5 0-5.2-1.3-10.3-3.8-14.8L416 96c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-1.5 304h387c16.8 0 30.5-13.7 30.5-30.5 0-5.2-1.3-10.3-3.8-14.8L416 240H32L3.8 290.7c-2.5 4.5-3.8 9.6-3.8 14.8C0 322.3 13.7 336 30.5 336m387 144c16.8 0 30.5-13.7 30.5-30.5 0-5.2-1.3-10.3-3.8-14.8L416 384H32L3.8 434.7c-2.5 4.5-3.8 9.6-3.8 14.8C0 466.3 13.7 480 30.5 480z"})
  );
}

export default LanShuttersSolid;
