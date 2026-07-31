import React from 'react';

export const LanSatelliteDishThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M216 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c154.6 0 280 125.4 280 280 0 4.4 3.6 8 8 8s8-3.6 8-8C512 132.5 379.5 0 216 0m-8 104c0 4.4 3.6 8 8 8 101.6 0 184 82.4 184 184 0 4.4 3.6 8 8 8s8-3.6 8-8c0-110.5-89.5-200-200-200-4.4 0-8 3.6-8 8M16 256c0-38.2 8.9-74.2 24.7-106.2 1.8-3.7 5-5.7 8.7-6.1 3.9-.4 8.5.9 12.1 4.5l302.3 302.3c3.6 3.6 4.9 8.2 4.5 12.1-.4 3.8-2.4 6.9-6.1 8.7-32 15.8-68.1 24.7-106.2 24.7-132.5 0-240-107.5-240-240m56.8-119.2c-14.1-14.1-37.6-12-46.5 5.8C9.4 176.8-.1 215.2-.1 255.9c0 141.4 114.6 256 256 256 40.7 0 79.2-9.5 113.3-26.4 17.9-8.8 19.9-32.4 5.8-46.5L229.5 293.5l56-56c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-56 56L72.7 136.7z"})
);

export default LanSatelliteDishThin;
