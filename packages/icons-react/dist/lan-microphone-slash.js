import React from 'react';

export const LanMicrophoneSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L419 364.4c37.6-35 61-85 61-140.4v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 46.6-19.9 88.5-51.7 117.8L351 296.5c20.2-17.6 33-43.5 33-72.5V96c0-53-43-96-96-96s-96 43-96 96v41.5zM224 169.5V96c0-35.3 28.7-64 64-64s64 28.7 64 64v128c0 20.1-9.3 38-23.7 49.7zm-120.2-7.2c-4.7 2.8-7.8 7.9-7.8 13.7v48c0 100.6 77.4 183.2 176 191.3V480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-64.7c15.2-1.3 29.9-4.3 43.9-8.9l-26.1-26.1c-10.9 2.4-22.3 3.6-33.9 3.6-88.4 0-160-71.6-160-160v-37.5l-24.2-24.2z"})
);

export default LanMicrophoneSlash;
