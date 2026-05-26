import React from 'react';

export const LanListTimeline = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M214.6 16H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H214.6c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6L192 25.4c6-6 14.1-9.4 22.6-9.4m0 32-32 32 32 32H416V48zM56 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 176a24 24 0 1 1 0-48 24 24 0 1 1 0 48M32 432a24 24 0 1 1 48 0 24 24 0 1 1-48 0m182.6-64H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H214.6c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4m0 32-32 32 32 32H416v-64zM192 201.4c6-6 14.1-9.4 22.6-9.4H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H214.6c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6zM480 224H214.6l-32 32 32 32H480z"})
);

export default LanListTimeline;
