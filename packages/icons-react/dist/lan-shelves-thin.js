import React from 'react';

export const LanShelvesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 0c4.4 0 8 3.6 8 8v168h480V8c0-4.4 3.6-8 8-8s8 3.6 8 8v496c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H16v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8m8 432h480V192H16zm136-160c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm-40 24c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40zm248-24h-48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24m-48-16h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40m0-240c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24zm-40 24c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40z"})
);

export default LanShelvesThin;
