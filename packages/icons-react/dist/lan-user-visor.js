import React from 'react';

export const LanUserVisor = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M349.4 153.8C337.5 212.1 285.9 256 224 256S110.5 212.1 98.6 153.8C87.4 146.7 80 134.2 80 120v-16c0-19.6 14.1-35.9 32.7-39.3C134.8 26 176.4 0 224 0s89.2 26 111.3 64.7C353.9 68.1 368 84.4 368 104v16c0 14.2-7.4 26.7-18.6 33.8M133.5 160c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64H133.4zm19-96h143.1C278 44.4 252.4 32 224 32s-54 12.4-71.6 32zM176 336c-79.5 0-144 64.5-144 144v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176h96c97.2 0 176 78.8 176 176v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-79.5-64.5-144-144-144zm78.3 155.4 40.2-80.3c3.9-7.9 15.1-7.9 19.1 0l40.2 80.3c4.6 9.2-5.1 18.9-14.3 14.3l-30.6-15.3c-3-1.5-6.5-1.5-9.5 0l-30.6 15.3c-9.2 4.6-18.9-5.1-14.3-14.3zM120 96c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"})
);

export default LanUserVisor;
