import React from 'react';

export function LanRugRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24zm56 48h48v288H80zm320 288H176V112h224zm48 0V112h48v288z"})
  );
}

export default LanRugRegular;
