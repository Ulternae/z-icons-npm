import React from 'react';

export const LanShekelSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M40 32c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24V80h120c39.8 0 72 32.2 72 72v184c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-66.3-53.7-120-120-120zm272 448c66.3 0 120-53.7 120-120V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v304c0 39.8-32.2 72-72 72H192V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v272c0 13.3 10.7 24 24 24z"})
);

export default LanShekelSignRegular;
