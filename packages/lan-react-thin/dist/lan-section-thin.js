import React from 'react';

export function LanSectionThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 256 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M95.9 0C42.9 0 0 42.9 0 95.9c0 24.4 9.1 46.9 24.5 64-15.2 17-24.5 39.4-24.5 64C0 269.6 32.3 309 77.1 318l98.6 19.7c37.4 7.5 64.2 40.3 64.2 78.4 0 44.1-35.8 79.9-79.9 79.9H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h136.1c53 0 95.9-42.9 95.9-95.9 0-24.3-9.1-46.9-24.5-64 15.2-17 24.5-39.4 24.5-64 0-45.7-32.3-85.1-77.1-94.1l-98.7-19.7C42.9 166.8 16 134 16 95.9 16 51.8 51.8 16 95.9 16H232c4.4 0 8-3.6 8-8s-3.6-8-8-8zm124 341.1c-11.6-9.3-25.6-16-41-19.1l-98.7-19.7C42.8 294.8 16 262 16 223.9c0-20.3 7.6-38.9 20.1-53 11.6 9.3 25.6 16 41 19.1l98.6 19.7c37.4 7.5 64.2 40.3 64.2 78.4 0 20.3-7.6 38.9-20.1 53z"})
  );
}

export default LanSectionThin;
