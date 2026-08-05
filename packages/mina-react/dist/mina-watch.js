import React from 'react';

export function MinaWatch({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.667 7c-.316-1.377-.418-4-2.348-4H10.68C8.751 3 8.65 5.623 8.333 7m0 10c.316 1.377.418 4 2.348 4h2.638c1.93 0 2.032-2.623 2.348-4m1.833-7v4c0 1.657-1.231 3-2.75 3h-5.5c-1.519 0-2.75-1.343-2.75-3v-4c0-1.657 1.231-3 2.75-3h5.5c1.519 0 2.75 1.343 2.75 3"}), React.createElement("path", {"d":"M12 10v2.5l1.604 1"})
  );
}

export default MinaWatch;
