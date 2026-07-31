import React from 'react';

export const LanGuaraniSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M184 0c-4.4 0-8 3.6-8 8v56.7C77.4 72.8 0 155.3 0 256s77.4 183.2 176 191.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-56c106 0 192-86 192-192 0-4.4-3.6-8-8-8H192V80c48 0 91.4 19.2 123.2 50.3 3.2 3.1 8.2 3 11.3-.1s3-8.2-.1-11.3C291.8 84.9 244.3 64 192 64V8c0-4.4-3.6-8-8-8m-8 80.7v350.6C86.3 423.2 16 347.8 16 256S86.3 88.8 176 80.7M192 432V264h175.8c-4.2 93.5-81.3 168-175.8 168"})
);

export default LanGuaraniSignThin;
