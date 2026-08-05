import React from 'react';

export function LanRefrigeratorRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 48c26.5 0 48 21.5 48 48v64h-48v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H48V96c0-26.5 21.5-48 48-48zm-48 160v120c0 13.3 10.7 24 24 24s24-10.7 24-24V208h48v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V208zM96 0C43 0 0 43 0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96z"})
  );
}

export default LanRefrigeratorRegular;
