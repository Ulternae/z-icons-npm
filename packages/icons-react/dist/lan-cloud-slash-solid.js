import React from 'react';

export const LanCloudSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.013 -31.975 576.013 576.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-25c-9.4-9.3-24.6-9.3-34 0S-2.3-.4 7 9l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-46.7-46.7c32.5-23.2 53.8-61.3 53.8-104.3 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-39.3 0-74.9 15.7-100.8 41.2zm55 201c0 8 .7 15.9 1.9 23.5C41 218.7 0 272.6 0 336c0 79.5 64.5 144 144 144h266.2L96.4 166.2c-.2 3.3-.3 6.5-.3 9.8z"})
);

export default LanCloudSlashSolid;
