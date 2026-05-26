import React from 'react';

export const LanWaveformThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0c3.9 0 7.3 2.8 7.9 6.7l72.2 447.8 64-383.9c.6-3.8 4-6.7 7.8-6.7s7.2 2.8 7.9 6.6L486.7 288H552c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72c-3.9 0-7.2-2.8-7.9-6.6L440.3 119l-64.4 386.3c-.6 3.9-4 6.7-7.9 6.7s-7.3-2.9-7.9-6.7L288 58.3l-72.1 447c-.6 3.9-4 6.7-7.9 6.7s-7.3-2.8-7.9-6.7L135.7 119l-31.8 178.4c-.7 3.8-4 6.6-7.9 6.6H24c-4.4 0-8-3.6-8-8s3.6-8 8-8h65.3l38.8-217.4c.7-3.8 4-6.6 7.9-6.6s7.2 2.8 7.8 6.7l64 383.9L280 6.8c.6-3.9 4-6.7 7.9-6.7z"})
);

export default LanWaveformThin;
