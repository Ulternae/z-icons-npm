import React from 'react';

export function LanRefrigeratorThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 16c44.2 0 80 35.8 80 80v80h-96v-72c0-4.4-3.6-8-8-8s-8 3.6-8 8v72H16V96c0-44.2 35.8-80 80-80zm-32 176v152c0 4.4 3.6 8 8 8s8-3.6 8-8V192h96v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192zM0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96H96C43 0 0 43 0 96"})
  );
}

export default LanRefrigeratorThin;
