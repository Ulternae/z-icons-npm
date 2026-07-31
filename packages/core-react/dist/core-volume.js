import React from 'react';

export function CoreVolume({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 480h-53.3c-13.8 0-27.3-4.5-38.4-12.8l-111-83.2H64C30.9 384 3.6 358.8.3 326.5L0 320V192c0-35.3 28.7-64 64-64h53.3l110.9-83.2c11.2-8.3 24.6-12.8 38.5-12.8H320zm64-445.7C492.6 49.8 576 143.2 576 256s-83.4 206.2-192 221.7V421c77.5-14.9 136-83.1 136-165S461.5 106 384 91V34.2zM147.2 185.6l-8.5 6.4H64v128h74.7l8.5 6.4L256 408V104zM384 132c55.2 14.2 96 64.3 96 124s-40.8 109.8-96 124v-59.4c23.7-11.8 40-36.3 40-64.5s-16.3-52.7-40-64.5v-59.5z"})
  );
}

export default CoreVolume;
