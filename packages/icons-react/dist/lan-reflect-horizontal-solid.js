import React from 'react';

export const LanReflectHorizontalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32c13.3 0 24 10.7 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.3 10.7-24 24-24M14.8 97.8c9-3.7 19.3-1.7 26.2 5.2l136 136c9.4 9.4 9.4 24.6 0 33.9L41 409c-6.9 6.9-17.2 8.9-26.2 5.2S0 401.7 0 392V120c0-9.7 5.8-18.5 14.8-22.2M471 103c6.9-6.9 17.2-8.9 26.2-5.2S512 110.3 512 120v272c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2L335 273c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanReflectHorizontalSolid;
