import React from 'react';

export const LanSquareSterlingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152.2 128.9c-17.3-47 17.5-96.9 67.6-96.9h3.1c23.3 0 45.7 9.3 62.2 25.8l8.6 8.6c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-8.6-8.6a71.98 71.98 0 0 0-50.9-21.1h-3.1c-39 0-66 38.8-52.5 75.4l10.1 27.6c1.1 3 2 6 2.8 9H280c4.4 0 8 3.6 8 8s-3.6 8-8 8h-97.2c1.3 19-3.4 38.2-13.9 54.7L142.6 368H312c4.4 0 8 3.6 8 8s-3.6 8-8 8H128c-2.9 0-5.6-1.6-7-4.2s-1.3-5.7.3-8.1l34.1-53.6c8.8-13.9 12.7-30.1 11.4-46.1H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h27.6c-.4-1.2-.8-2.3-1.2-3.5z"})
);

export default LanSquareSterlingThin;
