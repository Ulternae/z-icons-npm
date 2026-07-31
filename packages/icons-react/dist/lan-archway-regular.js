import React from 'react';

export const LanArchwayRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v352h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24V352c0-35.3-28.7-64-64-64s-64 28.7-64 64v104c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V80h-8C10.7 80 0 69.3 0 56m80 24v48h352V80zm352 96H80v256h64v-80c0-61.9 50.1-112 112-112s112 50.1 112 112v80h64z"})
);

export default LanArchwayRegular;
