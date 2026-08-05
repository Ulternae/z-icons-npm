import React from 'react';

export function LanGarageOpenSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 480V142.1c0-27.5 17.6-52 43.8-60.7l229-76.3c9.9-3.3 20.5-3.3 30.4 0l229 76.3c26.1 8.7 43.8 33.2 43.8 60.7V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v256c0 17.7-14.3 32-32 32S0 497.7 0 480m410.3-192H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h304.1c13.3 0 24 10.7 24 24s-10.7 24-24 24h-29.7zM128 377.1c0-14.3 3.5-28.4 10.2-41.1h299.7c6.7 12.6 10.2 26.7 10.2 41.1L448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H192v16c0 17.7-14.3 32-32 32s-32-14.3-32-32zm80 46.9a24 24 0 1 0 0-48 24 24 0 1 0 0 48m184-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanGarageOpenSolid;
