import React from 'react';

export function LanEurozoneSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 88c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H48v120h136c13.3 0 24 10.7 24 24s-10.7 24-24 24H48v120h152c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm272 0c0-13.3 10.7-24 24-24h192c8.6 0 16.5 4.6 20.8 12s4.3 16.5.1 24L337.4 400H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-8.6 0-16.5-4.6-20.8-12s-4.3-16.5-.1-24l171.5-300H296c-13.3 0-24-10.7-24-24"})
  );
}

export default LanEurozoneSignRegular;
