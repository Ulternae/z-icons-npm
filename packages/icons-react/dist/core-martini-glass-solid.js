import React from 'react';

export const CoreMartiniGlassSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32C19.4 32 8 39.3 2.9 50.8s-3.2 24.8 5 34.3l216.1 247v116h-96v64h256v-64h-96v-116l216.1-247c8.3-9.4 10.2-22.9 5.1-34.3S492.6 32 480 32zm98.5 96-28-32h307l-28 32z"})
);

export default CoreMartiniGlassSolid;
