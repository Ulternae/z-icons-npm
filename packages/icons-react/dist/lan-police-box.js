import React from 'react';

export const LanPoliceBox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H96c-17.7 0-32 14.3-32 32-17.7 0-32 14.3-32 32v384H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V96c0-17.7-14.3-32-32-32 0-17.7-14.3-32-32-32h-80zm80 48c0 17.7 14.3 32 32 32v384H64V96c17.7 0 32-14.3 32-32zm-152 64c-22.1 0-40 17.9-40 40v112c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40v-40h40c22.1 0 40-17.9 40-40v-32c0-22.1-17.9-40-40-40zm40 32v48h-48v-40c0-4.4 3.6-8 8-8zm0 80v40c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-40zm32-80h40c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-40z"})
);

export default LanPoliceBox;
