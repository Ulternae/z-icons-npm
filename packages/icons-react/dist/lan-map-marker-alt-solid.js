import React from 'react';

export const LanMapMarkerAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.1 0 384.1 515',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 188.6C0 84.4 86 0 192 0s192 84.4 192 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0C120.1 450.9-.1 307.9-.1 188.6zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanMapMarkerAltSolid;
