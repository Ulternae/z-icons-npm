import React from 'react';

export const LanRobotAstromechRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c-70.7 0-128 57.3-128 128v16H88c-30.9 0-56 25.1-56 56v210.9L2.1 478.2c-3.3 7.4-2.6 16 1.8 22.8s12 11 20.1 11h112c13.3 0 24-10.7 24-24v-72.9l22.1 24.8c4.6 5.1 11.1 8.1 17.9 8.1h112c6.9 0 13.4-2.9 17.9-8.1l22.1-24.8V488c0 13.3 10.7 24 24 24h112c8.1 0 15.7-4.1 20.1-10.9s5.1-15.4 1.8-22.8L480 410.9V200c0-30.9-25.1-56-56-56h-40v-16C384 57.3 326.7 0 256 0m-64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32M88 192h24v272H60.9l17-38.3c1.4-3.1 2.1-6.4 2.1-9.7V200c0-4.4 3.6-8 8-8m72 0h192v150.9L301.2 400h-90.4L160 342.9zm240 0h24c4.4 0 8 3.6 8 8v216c0 3.4.7 6.7 2.1 9.7l17 38.3H400zm-192 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanRobotAstromechRegular;
