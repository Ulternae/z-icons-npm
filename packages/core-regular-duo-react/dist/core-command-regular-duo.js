import React from 'react';

export function CoreCommandRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 112c0 26.5 21.5 48 48 48h48v-48c0-26.5-21.5-48-48-48s-48 21.5-48 48m0 288c0 26.5 21.5 48 48 48s48-21.5 48-48v-48h-48c-26.5 0-48 21.5-48 48m288-288v48h48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48m0 240v48c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M64 112c0 26.5 21.5 48 48 48h48v-48c0-26.5-21.5-48-48-48s-48 21.5-48 48m160 0v48h64v-48C288 50.1 338.1 0 400 0s112 50.1 112 112-50.1 112-112 112h-48v64h48c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112v-48h-64v48c0 61.9-50.1 112-112 112S0 461.9 0 400s50.1-112 112-112h48v-64h-48C50.1 224 0 173.9 0 112S50.1 0 112 0s112 50.1 112 112m32 176h32v-64h-64v64zm-144 64c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48v-48zm336-240c0-26.5-21.5-48-48-48s-48 21.5-48 48v48h48c26.5 0 48-21.5 48-48m-48 240h-48v48c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48"})
  );
}

export default CoreCommandRegularDuo;
