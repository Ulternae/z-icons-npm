import React from 'react';

export const NeoMicrophoneSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M47.8 8.2C36.9-2.7 19.1-2.7 8.2 8.2s-10.9 28.7 0 39.6l504 504c10.9 10.9 28.7 10.9 39.6 0s10.9-28.7 0-39.6l-97.1-97.1c50.2-45 77.3-111.8 77.3-191.1 0-15.5-12.5-28-28-28s-28 12.5-28 28c0 67.2-22.8 118.4-61 151.4l-42.1-42.1C403.4 308.1 420 269.4 420 224v-84c0-40.3-12.9-75.9-38.5-101.5S320.3 0 280 0s-75.9 12.9-101.5 38.5c-17.7 17.7-29.3 40.1-34.8 65.6zM84 224c0-15.5-12.5-28-28-28s-28 12.5-28 28c0 74.5 23.8 138.1 68.9 183.1 39.3 39.3 92.7 62.4 155.1 67.7V532c0 15.5 12.5 28 28 28s28-12.5 28-28v-84c0-15.5-12.5-28-28-28-62.4 0-110.8-19.7-143.5-52.5S84 286.4 84 224"})
);

export default NeoMicrophoneSlashSolid;
