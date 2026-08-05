import React from 'react';

export function NeoBoldSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 504 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M28 28C12.5 28 0 40.5 0 56s12.5 28 28 28h28v392H28c-15.5 0-28 12.5-28 28s12.5 28 28 28h364c31.7 0 60.3-10.2 81-31s31-49.4 31-81-10.2-60.3-31-81-49.4-31-81-31h-84c-15.5 0-28-12.5-28-28s12.5-28 28-28h28c31.7 0 60.3-10.2 81-31s31-49.3 31-81-10.2-60.3-31-81-49.4-31-81-31z"})
  );
}

export default NeoBoldSolid;
