import React from 'react';

export const LanTextHeightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M40 32C17.9 32 0 49.9 0 72v80c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-13.3 10.7-24 24-24h112v416H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V48h112c13.3 0 24 10.7 24 24v80c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-22.1-17.9-40-40-40zm357.7 346.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l88 88c3.1 3.1 8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-74.3 74.3V59.2l74.3 74.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-88-88c-1.5-1.5-3.5-2.3-5.7-2.3s-4.2.8-5.7 2.3l-88 88c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l74.3-74.3v393.4l-74.3-74.3z"})
);

export default LanTextHeightThin;
