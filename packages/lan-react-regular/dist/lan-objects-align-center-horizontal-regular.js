import React from 'react';

export function LanObjectsAlignCenterHorizontalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M248-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h152v64h-88c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h88v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h88c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-88v-64h152c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H248zm152 120v64H48v-64zm-64 224v64H112v-64z"})
  );
}

export default LanObjectsAlignCenterHorizontalRegular;
