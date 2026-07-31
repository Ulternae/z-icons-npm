import React from 'react';

export const LanMagnifyingGlassPlayThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m-33.2-268.7c0-1.8 1.5-3.3 3.3-3.3.6 0 1.2.2 1.7.5l99.1 59.5c1.4.9 2.3 2.4 2.3 4s-.9 3.2-2.3 4l-99.1 59.5c-.5.3-1.1.5-1.7.5-1.8 0-3.3-1.5-3.3-3.3zm3.3-19.3c-10.6 0-19.3 8.6-19.3 19.3v121.4c0 10.6 8.6 19.3 19.3 19.3 3.5 0 6.9-1 9.9-2.7l99.1-59.5c6.2-3.7 10.1-10.5 10.1-17.8s-3.8-14-10.1-17.8L188 130.7c-3-1.8-6.4-2.7-9.9-2.7"})
);

export default LanMagnifyingGlassPlayThin;
