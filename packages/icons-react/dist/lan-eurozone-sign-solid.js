import React from 'react';

export const LanEurozoneSignSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H64v96h112c17.7 0 32 14.3 32 32s-14.3 32-32 32H64v96h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm272 0c0-17.7 14.3-32 32-32h176c11.3 0 21.8 6 27.5 15.7s5.9 21.8.5 31.7L358.1 384H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H304c-11.3 0-21.8-6-27.5-15.7s-5.9-21.8-.5-31.7L425.9 128H304c-17.7 0-32-14.3-32-32"})
);

export default LanEurozoneSignSolid;
