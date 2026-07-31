import React from 'react';

export const LanUserVisorRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 176H160c14.6 19.4 37.8 32 64 32s49.4-12.6 64-32m-183-.8c-14.3-3.2-25-16-25-31.2V80c0-17.7 14.3-32 32-32h12.1C147.5 18.7 183.6 0 224 0s76.5 18.7 99.9 48H336c17.7 0 32 14.3 32 32v64c0 15.3-10.7 28-25 31.2-18.8 47.3-65 80.8-119 80.8s-100.2-33.5-119-80.8M176 352c-70.7 0-128 57.3-128 128v8c0 13.3-10.7 24-24 24S0 501.3 0 488v-8c0-97.2 78.8-176 176-176h96c97.2 0 176 78.8 176 176v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-70.7-57.3-128-128-128zm118.5 59.1c3.9-7.9 15.1-7.9 19.1 0l40.2 80.3c4.6 9.2-5.1 18.9-14.3 14.3l-30.6-15.3c-3-1.5-6.5-1.5-9.5 0l-30.6 15.3c-9.2 4.6-18.9-5.1-14.3-14.3l40.2-80.3zM128 128h192V96H128z"})
);

export default LanUserVisorRegular;
