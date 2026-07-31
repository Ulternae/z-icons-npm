import React from 'react';

export const LanHoodCloakSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M31.8 416.4 6.2 454.7c-4 6.1-6.2 13.2-6.2 20.5C0 495.5 16.5 512 36.8 512h438.3c20.3 0 36.8-16.5 36.8-36.8 0-7.3-2.2-14.4-6.2-20.4l-25.6-38.3c-21-31.5-32.2-68.6-32.2-106.5v-91.7c0-37.9-11.2-75-32.2-106.5L389 71.5c-2.7-4-1.2-9.4 3.1-11.6l45-22.5c6.7-3.3 10.9-10.1 10.9-17.6C448 8.9 439.1 0 428.2 0H288C164.3 0 64 100.3 64 224v85.9c0 37.9-11.2 75-32.2 106.5M352 448H160V288c0-53 43-96 96-96s96 43 96 96z"})
);

export default LanHoodCloakSolid;
