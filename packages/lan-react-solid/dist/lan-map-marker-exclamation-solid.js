import React from 'react';

export function LanMapMarkerExclamationSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 515',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 0c106 0 192 84.4 192 188.6 0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.4 12.8-43.2 0C120.2 450.9 0 307.9 0 188.6 0 84.4 86 0 192 0m0 288a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.5-18.2-13-33.7-31.2-33.7"})
  );
}

export default LanMapMarkerExclamationSolid;
