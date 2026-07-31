import React from 'react';

export const LanJugSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160-16h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32m240 184c0-13.3-10.7-24-24-24-10.3 0-19.1 6.5-22.5 15.6l25.1 32.2c12.1-1.3 21.4-11.5 21.4-23.9zm-96-72 18.5 23.8C335.7 105.2 354.8 96 376 96c39.8 0 72 32.2 72 72 0 29.2-17.4 54.3-42.3 65.6 6.8 15.8 10.3 32.9 10.3 50.3V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V283.9c0-28.5 9.5-56.1 27-78.6L144 96zM128 288c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"})
);

export default LanJugSolid;
