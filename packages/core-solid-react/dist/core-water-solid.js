import React from 'react';

export function CoreWaterSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M0 0h640c0 70.7-57.3 128-128 128-38.2 0-72.5-16.8-96-43.3-23.5 26.6-57.8 43.3-96 43.3s-72.5-16.8-96-43.3c-23.5 26.5-57.8 43.3-96 43.3C57.3 128 0 70.7 0 0m64 192h576c0 70.7-57.3 128-128 128-38.2 0-72.5-16.8-96-43.3-23.5 26.6-57.8 43.3-96 43.3s-72.5-16.8-96-43.3c-23.5 26.5-57.8 43.3-96 43.3C57.3 320 0 262.7 0 192zm0 192h576c0 70.7-57.3 128-128 128-38.2 0-72.5-16.8-96-43.3-23.5 26.6-57.8 43.3-96 43.3s-72.5-16.8-96-43.3c-23.5 26.5-57.8 43.3-96 43.3C57.3 512 0 454.7 0 384z"})
  );
}

export default CoreWaterSolid;
