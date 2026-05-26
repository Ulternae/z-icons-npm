import React from 'react';

export const LanStrikethroughRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 151.7C96 85.6 149.6 32 215.7 32H376c13.3 0 24 10.7 24 24s-10.7 24-24 24H215.7c-39.6 0-71.7 32.1-71.7 71.7 0 34.8 25 64.6 59.2 70.6L303.4 240H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h110.9C110.8 217.9 96 186.3 96 151.7M363.8 336h49.8c1.6 7.9 2.5 16 2.5 24.3 0 66.1-53.6 119.7-119.7 119.7H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h160.3c39.6 0 71.7-32.1 71.7-71.7 0-8.5-1.5-16.7-4.2-24.3"})
);

export default LanStrikethroughRegular;
