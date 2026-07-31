import React from 'react';

export const LanMagnifyingGlassDollarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m0-312c-4.4 0-8 3.6-8 8v16h-5.4c-23.6 0-42.6 19.1-42.6 42.6 0 20.8 15.1 38.6 35.6 42.1l38.1 6.3c12.8 2.1 22.3 13.3 22.3 26.3 0 14.7-11.9 26.6-26.6 26.6l-53.4.1c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16h5.4c23.6 0 42.6-19.1 42.6-42.6 0-20.8-15.1-38.6-35.6-42.1l-38.1-6.3c-12.8-2.1-22.3-13.3-22.3-26.3 0-14.7 11.9-26.6 26.6-26.6H240c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-16c0-4.4-3.6-8-8-8z"})
);

export default LanMagnifyingGlassDollarThin;
