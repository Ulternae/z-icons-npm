import React from 'react';

export const LanBlenderThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 40C0 17.9 17.9 0 40 0h72v.1c.5 0 1-.1 1.5-.1h324.6c21.1 0 36.4 20.1 30.9 40.4L387.3 340c16.9 7.4 28.7 24.3 28.7 44v80c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-80c0-20.5 12.8-37.9 30.8-44.8L114.9 208H40c-22.1 0-40-17.9-40-40zm40-24c-13.3 0-24 10.7-24 24v128c0 13.3 10.7 24 24 24h73.5L97.6 17.4c0-.5-.1-1-.1-1.4zm104 336c-17.7 0-32 14.3-32 32v80c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32zm96 72a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64M142.6 336h229.2l30.5-112H320c-4.4 0-8-3.6-8-8s3.6-8 8-8h86.7l26.2-96H320c-4.4 0-8-3.6-8-8s3.6-8 8-8h117.2l16.3-59.8C456.3 26 448.7 16 438.1 16H113.5z"})
);

export default LanBlenderThin;
