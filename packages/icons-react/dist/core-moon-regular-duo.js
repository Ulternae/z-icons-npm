import React from 'react';

export const CoreMoonRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 256c0 106 86 192 192 192 44.9 0 86.3-15.4 119-41.3C251.3 374.4 160 261.9 160 128q0-20.25 2.7-39.9C103.8 120.9 64 183.8 64 256","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M375 406.7c-32.7 25.9-74.1 41.3-119 41.3-106 0-192-86-192-192 0-72.2 39.8-135.1 98.7-167.9-1.8 13-2.7 26.4-2.7 39.9 0 133.8 91.3 246.4 215 278.7m48.1-56C311.1 338.3 224 243.4 224 128.1c0-44.1 12.6-83.2 32-115.4 2.6-4.2 5.2-8.4 8.1-12.4-2.7-.1-5.4-.1-8.1-.1-24.5 0-48.3 3.5-70.7 9.9C78.3 40.8 0 139.4 0 256.2c0 141.4 114.6 256 256 256 80.9 0 153-37.5 199.9-96.1 16.5-20.6 29.9-43.8 39.4-68.9-15.3 3.3-31.1 5-47.4 5-8.4 0-16.7-.5-24.9-1.4z"})
);

export default CoreMoonRegularDuo;
