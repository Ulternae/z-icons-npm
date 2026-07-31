import React from 'react';

export const LanKiwiBirdThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 400c-22.6 0-44.2-4.3-64-12v-60c0-4.4-3.6-8-8-8s-8 3.6-8 8v52.8C55 351.7 16 292.4 16 224c0-97.2 78.8-176 176-176 37.3 0 71.8 11.6 100.3 31.4 33.8 23.5 74.6 48.6 121.3 48.6H464c53 0 96 43 96 96s-43 96-96 96h-50.4c-46.7 0-87.5 25.2-121.3 48.6-28.5 19.8-63 31.4-100.3 31.4M0 224c0 77.5 45.9 144.3 112 174.6V472c0 4.4 3.6 8 8 8s8-3.6 8-8v-66.9c20 7.1 41.6 10.9 64 10.9 10.9 0 21.6-.9 32-2.7V472c0 4.4 3.6 8 8 8s8-3.6 8-8v-62c22.3-5.7 43-15.4 61.4-28.2 33.8-23.5 71-45.8 112.1-45.8h50.4c6.3 0 12.4-.5 18.5-1.5L561 475.9c1.8 3.2 5.5 4.8 9 3.9s6-4.1 6-7.7v-240h-.3c.2-2.6.3-5.3.3-8 0-61.9-50.1-112-112-112h-50.4c-41.2-.1-78.3-22.4-112.2-45.9C270.4 44.6 232.7 32 192 32 86 32 0 118 0 224m560 217.1-61.4-110.5c25.9-8.4 47.6-25.9 61.4-48.8v159.4zM448 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanKiwiBirdThin;
