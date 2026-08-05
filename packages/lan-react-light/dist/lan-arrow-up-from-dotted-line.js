import React from 'react';

export function LanArrowUpFromDottedLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M180.7 4.7c6.2-6.2 16.4-6.2 22.6 0l144 144c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L208 54.6V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V54.6L59.3 171.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM0 488c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24m136-24c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24m88 24c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24m136-24c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24"})
  );
}

export default LanArrowUpFromDottedLine;
