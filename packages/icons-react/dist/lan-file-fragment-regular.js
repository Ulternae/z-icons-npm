import React from 'react';

export const LanFileFragmentRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 48H64c-8.8 0-16 7.2-16 16v208H0V64C0 28.7 28.7 0 64 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64h-80v-48h80c8.8 0 16-7.2 16-16V208h-88c-39.8 0-72-32.2-72-72zm140.1 112L224 67.9V136c0 13.3 10.7 24 24 24zM48 464h96v-96H48zM0 352c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"})
);

export default LanFileFragmentRegular;
