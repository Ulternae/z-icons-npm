import React from 'react';

export function LanBlindsOpenRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h88v248c0 13.3 10.7 24 24 24s24-10.7 24-24V80h264c13.3 0 24-10.7 24-24s-10.7-24-24-24zm400 176c13.3 0 24-10.7 24-24s-10.7-24-24-24H208v48zM24 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v-48zm0 192h40v-48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24m400-48H208v48h216c13.3 0 24-10.7 24-24s-10.7-24-24-24M24 480h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24"})
  );
}

export default LanBlindsOpenRegular;
