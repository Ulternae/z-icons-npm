import React from 'react';

export const LanWashingMachineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm368 240a144 144 0 1 0-288 0 144 144 0 1 0 288 0M96 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m8 304c-53 0-96-43-96-96 0-17.5 4.7-33.8 12.8-48h3.2c64 0 96 64 160 64 5 0 10-.2 14.8-.6-7.4 45.7-47 80.6-94.8 80.6"})
);

export default LanWashingMachineSolid;
