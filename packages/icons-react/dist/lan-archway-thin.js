import React from 'react';

export const LanArchwayThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v416H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c4.4 0 8-3.6 8-8V352c0-44.2 35.8-80 80-80s80 35.8 80 80v120c0 4.4 3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V48h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm456 16v80H48V48zm0 96v320H352V352c0-53-43-96-96-96s-96 43-96 96v112H48V144z"})
);

export default LanArchwayThin;
