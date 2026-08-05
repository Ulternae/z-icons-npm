import React from 'react';

export function LanPopsicleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 160c0-61.9-50.1-112-112-112S48 98.1 48 160v176h88V184c0-13.3 10.7-24 24-24s24 10.7 24 24v152h88zM136 384H48c-26.5 0-48-21.5-48-48V160C0 71.6 71.6 0 160 0s160 71.6 160 160v176c0 26.5-21.5 48-48 48h-88v104c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
  );
}

export default LanPopsicleRegular;
