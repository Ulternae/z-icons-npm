import React from 'react';

export const LanWindowFrameThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 256v240h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64zm-16 8H232v232h168zm0-16V64c0-26.5-21.5-48-48-48H232v232zm-184 0V16H96c-26.5 0-48 21.5-48 48v184zM48 264v232h168V264z"})
);

export default LanWindowFrameThin;
