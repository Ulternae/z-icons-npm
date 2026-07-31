import React from 'react';

export const LanRugThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 72c0-4.4 3.6-8 8-8h560c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-80H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V80H8c-4.4 0-8-3.6-8-8m48 96v264h64V80H48zm80 264h320V80H128zM464 80v352h64V80z"})
);

export default LanRugThin;
