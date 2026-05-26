import React from 'react';

export const LanSpade = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M243.2 37.5c3.5-3.5 8.3-5.5 13.3-5.5s9.7 2 13.3 5.5l182.6 182.6c37.5 37.5 37.5 98.3 0 135.8s-98.3 37.5-135.8 0l-48.8-48.8c-6.2-6.2-16.4-6.2-22.6 0l-48.8 48.8c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8zM256.5 0c-13.5 0-26.4 5.3-35.9 14.9L38 197.5c-50 50-50 131 0 181s131 50 181 0l21.5-21.5v123h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V357l21.5 21.5c50 50 131 50 181 0s50-131 0-181L292.4 14.9C282.9 5.3 270 0 256.5 0"})
);

export default LanSpade;
