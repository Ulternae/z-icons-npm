import React from 'react';

export function LanUpFromDottedLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M209 7c-9.4-9.4-24.6-9.4-33.9 0l-144 144c-6.9 6.9-8.9 17.2-5.2 26.2S38.3 192 48 192h80v144c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V192h80c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2zm15 249v80c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V176c0-8.8-7.2-16-16-16H67.3L192 35.3 316.7 160H240c-8.8 0-16 7.2-16 16zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24m112 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24m88 24c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24m136-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24"})
  );
}

export default LanUpFromDottedLine;
