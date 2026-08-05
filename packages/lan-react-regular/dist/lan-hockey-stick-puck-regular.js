import React from 'react';

export function LanHockeyStickPuckRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32.023 640 544.023',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M497.8-17c5-12.3 18.9-18.2 31.2-13.3s18.2 19 13.2 31.3L366.5 436.9c-18.3 45.4-62.4 75.1-111.3 75.1H120c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h241.9zM608 416c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm-488-48c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h40v-96zm88 96h47.2c29.4 0 55.8-17.8 66.8-45.1l20.5-50.9H208z"})
  );
}

export default LanHockeyStickPuckRegular;
