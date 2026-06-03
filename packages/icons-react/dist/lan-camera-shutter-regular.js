import React from 'react';

export const LanCameraShutterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -40.05 576 552.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m49.5-33 47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0L15.5 1c-9.3-9.4-9.3-24.6 0-34s24.6-9.4 33.9 0zM179 56.9C189.4 41.4 206.9 32 225.6 32h125.7c18.7 0 36.2 9.4 46.6 24.9l26 39.1h56.5c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64h-384c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h56.5l26-39.1zM225.6 80c-2.7 0-5.2 1.3-6.7 3.6l-33.2 49.8c-4.5 6.7-11.9 10.7-20 10.7H96.4c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-256c0-8.8-7.2-16-16-16h-69.3c-8 0-15.5-4-20-10.7L358 83.6c-1.5-2.2-4-3.6-6.7-3.6zm-49.1 192a112 112 0 1 1 224 0 112 112 0 1 1-224 0m112 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanCameraShutterRegular;
