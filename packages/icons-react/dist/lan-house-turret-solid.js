import React from 'react';

export const LanHouseTurretSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 0c-17.7 0-32 14.3-32 32v29.6c4.1 2.6 8 5.4 11.6 8.6l170.6 149.3c16.4 14.3 25.8 35.1 25.8 56.8 0 25.5-12.6 48.1-32 61.7v121.2c0 19.4-5.5 37.4-14.9 52.8H528c26.5 0 48-21.5 48-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h-64V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32h-64V32c0-17.7-14.3-32-32-32m96 304h4.5c15.2 0 27.5-12.3 27.5-27.5 0-7.9-3.4-15.5-9.4-20.7L236 106.5c-7.7-6.8-17.7-10.5-28-10.5s-20.3 3.7-28 10.5L9.4 255.8C3.4 261 0 268.6 0 276.5 0 291.7 12.3 304 27.5 304H32v155.4c0 29 23.6 52.6 52.6 52.6h246.8c29.1 0 52.6-23.6 52.6-52.6zm-224-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24z"})
);

export default LanHouseTurretSolid;
