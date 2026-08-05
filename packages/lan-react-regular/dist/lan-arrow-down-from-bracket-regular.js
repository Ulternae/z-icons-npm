import React from 'react';

export function LanArrowDownFromBracketRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 168c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-53-43-96-96-96H96C43 0 0 43 0 96v72c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48zM207 505c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l136-136c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v246.1l-95-95c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"})
  );
}

export default LanArrowDownFromBracketRegular;
