import React from 'react';

export const LanQuestionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 160C48 98.1 98.1 48 160 48s112 50.1 112 112c0 48.2-30.5 89.4-73.3 105.1C169.3 275.9 136 303 136 344v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-12.1 11-26.3 31.3-33.8C276.4 287.7 320 229 320 160 320 71.6 248.4 0 160 0S0 71.6 0 160v8c0 13.3 10.7 24 24 24s24-10.7 24-24zm112 352c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32"})
);

export default LanQuestionRegular;
