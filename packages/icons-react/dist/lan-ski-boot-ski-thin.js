import React from 'react';

export const LanSkiBootSkiThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M632 408c4.4 0 8 3.6 8 8v24c0 39.8-32.2 72-72 72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h560c30.9 0 56-25.1 56-56v-24c0-4.4 3.6-8 8-8M417.8.2c3.8.8 6.3 4.2 6.2 7.9l-.2 1.6-46.6 209.7 84.3 39.7c30.8 14.5 50.5 45.5 50.5 79.6v21.2c0 30.9-25.1 56-56 56H161.1c-34.8 0-61.1-31.3-55.2-65.6l47.3-272c4.7-26.8 28-46.4 55.2-46.4h194.1l5.7-25.8.5-1.5c1.5-3.4 5.3-5.4 9.1-4.5zM284.7 48c-28.2 117.4-97.1 159.3-140.2 174.1l-22.8 131.1c-4.2 24.5 14.6 46.8 39.4 46.8H456c22.1 0 40-17.9 40-40v-21.2c0-27.9-16.1-53.3-41.3-65.2L366.2 232H312c-4.4 0-8-3.6-8-8s3.6-8 8-8h49.6l16-72H328c-4.4 0-8-3.6-8-8s3.6-8 8-8h53.1l17.8-80zm-76.3 0C189 48 172.3 62 169 81.2l-21.4 122.7c38.6-15.6 95.3-55 120.7-155.9z"})
);

export default LanSkiBootSkiThin;
