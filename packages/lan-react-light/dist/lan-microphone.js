import React from 'react';

export function LanMicrophone({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 32c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64s-64-28.7-64-64V96c0-35.3 28.7-64 64-64M96 96v128c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96S96 43 96 96m-64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 100.6 77.4 183.2 176 191.3V480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-64.7c98.6-8.1 176-90.7 176-191.3v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 88.4-71.6 160-160 160S32 312.4 32 224z"})
  );
}

export default LanMicrophone;
