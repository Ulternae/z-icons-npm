import React from 'react';

export function LanCameraShutter({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 543.95',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M43.3-27.3 96 25.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0m133.6 83.1c8.6-14.7 24.4-23.8 41.5-23.8h139.2c17.1 0 32.9 9.1 41.5 23.8L422.5 96H480c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h57.5zm41.5 8.2c-5.7 0-11 3-13.8 7.9L176.5 120c-2.9 4.9-8.1 7.9-13.8 7.9L96 128c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-66.7c-5.7 0-11-3-13.8-7.9l-28.1-48.2c-2.9-4.9-8.1-7.9-13.8-7.9zM176 288a112 112 0 1 1 224 0 112 112 0 1 1-224 0m112 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160"})
  );
}

export default LanCameraShutter;
