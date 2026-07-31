import React from 'react';

export const LanHospitalsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M280 0c-30.9 0-56 25.1-56 56v40H56c-30.9 0-56 25.1-56 56v304c0 30.9 25.1 56 56 56h464c30.9 0 56-25.1 56-56V56c0-30.9-25.1-56-56-56zm168 496v-96c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v96h-72c-22.1 0-40-17.9-40-40V56c0-22.1 17.9-40 40-40h240c22.1 0 40 17.9 40 40v400c0 22.1-17.9 40-40 40zm-80 0v-96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v96zM56 112h168v344c0 15.7 6.4 29.8 16.8 40H56c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40m312-24v24h-24c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h24c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-24V88c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m48 0v40h40v32h-40v40h-32v-40h-40v-32h40V88zm-304 96c-8.8 0-16 7.2-16 16v24H72c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h24c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-24v-24c0-8.8-7.2-16-16-16zm0 16h32v40h40v32h-40v40h-32v-40H72v-32h40z"})
);

export default LanHospitalsThin;
