import React from 'react';

export function LanBahtSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M136 0c-13.3 0-24 10.7-24 24v40H37.6C16.8 64 0 80.8 0 101.6v304.7c0 23 18.7 41.7 41.7 41.7H112v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h52c59.6 0 108-48.4 108-108 0-42.1-24.1-78.5-59.2-96.4 16.9-19.1 27.2-44.2 27.2-71.6 0-59.6-48.4-108-108-108h-20V24c0-13.3-10.7-24-24-24m-24 112v120H48V112zm48 120V112h20c33.1 0 60 26.9 60 60s-26.9 60-60 60zm-48 48v120H48V280zm48 120V280h52c33.1 0 60 26.9 60 60s-26.9 60-60 60z"})
  );
}

export default LanBahtSignRegular;
