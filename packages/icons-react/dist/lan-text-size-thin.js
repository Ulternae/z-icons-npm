import React from 'react';

export const LanTextSizeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 72c0-13.3 10.7-24 24-24h112v416H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V48h112c13.3 0 24 10.7 24 24v80c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v80c0 4.4 3.6 8 8 8s8-3.6 8-8zm256 192c0-13.3 10.7-24 24-24h112v224h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V240h112c13.3 0 24 10.7 24 24v80c0 4.4 3.6 8 8 8s8-3.6 8-8v-80c0-22.1-17.9-40-40-40H296c-22.1 0-40 17.9-40 40v80c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanTextSizeThin;
