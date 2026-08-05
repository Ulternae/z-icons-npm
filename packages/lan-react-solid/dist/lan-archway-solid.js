import React from 'react';

export function LanArchwaySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h128V352c0-53 43-96 96-96s96 43 96 96v128h128c17.7 0 32-14.3 32-32s-14.3-32-32-32V144H32z"})
  );
}

export default LanArchwaySolid;
