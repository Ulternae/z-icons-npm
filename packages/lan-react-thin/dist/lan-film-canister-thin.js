import React from 'react';

export function LanFilmCanisterThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 48V24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v24h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16v416h16c4.4 0 8 3.6 8 8s-3.6 8-8 8H16c-4.4 0-8-3.6-8-8s3.6-8 8-8h16V64H16c-4.4 0-8-3.6-8-8s3.6-8 8-8zm144-24c0-4.4-3.6-8-8-8H136c-4.4 0-8 3.6-8 8v24h128zM48 64v416h272V64zm56 64c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-4.4 3.6-8 8-8m352 304h-72v-16h72c13.3 0 24-10.7 24-24v-40c0-22.1 17.9-40 40-40h16c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H384v-16h152c22.1 0 40 17.9 40 40v136c0 22.1-17.9 40-40 40h-16c-13.3 0-24 10.7-24 24v40c0 22.1-17.9 40-40 40"})
  );
}

export default LanFilmCanisterThin;
