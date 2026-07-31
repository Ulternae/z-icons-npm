import React from 'react';

export const LanGarageCarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 480V142.1c0-27.5 17.6-52 43.8-60.7l229-76.3c9.9-3.3 20.5-3.3 30.4 0l229 76.3c26.1 8.7 43.8 33.2 43.8 60.7V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v256c0 17.7-14.3 32-32 32S0 497.7 0 480m218.7-188-25.2 44h189.1l-25.2-44c-1.4-2.5-4.1-4-6.9-4H225.8c-2.9 0-5.5 1.5-6.9 4zM128 392v-14.9c0-15.4 4-30.5 11.7-43.8l37.4-65.1c10-17.4 28.5-28.1 48.6-28.1h124.7c20.1 0 38.6 10.7 48.6 28.1l37.4 65.1c7.7 13.3 11.7 28.4 11.7 43.8L448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H192v16c0 17.7-14.3 32-32 32s-32-14.3-32-32zm80 32a24 24 0 1 0 0-48 24 24 0 1 0 0 48m184-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanGarageCarSolid;
