import React from 'react';

export const Lan3Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56 264c-4.4 0-8-3.6-8-8s3.6-8 8-8h148c55.2 0 100-44.8 100-100S259.2 48 204 48H16c-4.4 0-8-3.6-8-8s3.6-8 8-8h188c64.1 0 116 51.9 116 116 0 49.1-30.5 91.1-73.6 108 43.1 16.9 73.6 58.9 73.6 108 0 64.1-51.9 116-116 116H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h196c55.2 0 100-44.8 100-100s-44.8-100-100-100z"})
);

export default Lan3Thin;
