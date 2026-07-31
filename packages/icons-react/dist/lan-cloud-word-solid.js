import React from 'react';

export const LanCloudWordSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 336c0 79.5 64.5 144 144 144h304c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1C343.5 63.3 295.4 32 240 32 160.5 32 96 96.5 96 176c0 8 .7 15.9 1.9 23.5C41 218.7 0 272.6 0 336m240 24c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32c13.3 0 24 10.7 24 24m120-104h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24m56 104c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24M184 256h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanCloudWordSolid;
