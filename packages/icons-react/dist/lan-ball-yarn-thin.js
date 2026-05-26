import React from 'react';

export const LanBallYarnThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16.1 264h479.7c-.9 28.2-6.7 55.1-16.5 80H32.6c-9.8-24.9-15.6-51.8-16.5-80m134.4 207.6L180.2 360H280l-35.6 135.7c-33.6-1.6-65.4-10.1-93.9-24.1m-14.5-7.7C94.3 439.8 60.6 403.5 39.6 360h124zM472.4 360c-38.1 79.1-118.3 134.1-211.5 136l35.6-136zM345.3 496C442.6 459.8 512 366 512 256 512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256h248c4.4 0 8-3.6 8-8s-3.6-8-8-8zm150.6-248H16.1c.9-28.2 6.7-55.1 16.5-80h446.7c9.8 24.9 15.6 51.8 16.5 80zM256 16l-36.7 136H39.6C78.4 71.5 160.7 16 256 16m16.4.6c33.7 2.3 65.4 11.5 93.9 26.2L335.7 152h-99.8zm200 135.4H352.3l28.3-101.1c39.5 24.1 71.5 59.2 91.7 101.1z"})
);

export default LanBallYarnThin;
