import React from 'react';

export const LanBookmarkPlusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 513.149',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v417.1c0 25.6 28.5 40.8 49.8 26.6L192 412.8l142.2 94.9c21.3 14.2 49.8-1.1 49.8-26.6V64c0-35.3-28.7-64-64-64zM48 64c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v387.2L218.6 373c-16.1-10.7-37.1-10.7-53.2 0L48 451.2zm144 48c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24"})
);

export default LanBookmarkPlusRegular;
