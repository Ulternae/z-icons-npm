import React from 'react';

export function Lan8({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 152c0-66.3-53.7-120-120-120h-48C69.7 32 16 85.7 16 152c0 41.4 20.9 77.9 52.8 99.4C28.1 270.6 0 312 0 360c0 66.3 53.7 120 120 120h80c66.3 0 120-53.7 120-120 0-48-28.1-89.4-68.8-108.6 31.9-21.6 52.8-58.1 52.8-99.4M184.1 272H200c48.6 0 88 39.4 88 88s-39.4 88-88 88h-80c-48.6 0-88-39.4-88-88s39.4-88 88-88zm0-32H136c-48.6 0-87.9-39.4-87.9-88s39.4-88 88-88h48c48.6 0 88 39.4 88 88s-39.4 88-87.9 88z"})
  );
}

export default Lan8;
