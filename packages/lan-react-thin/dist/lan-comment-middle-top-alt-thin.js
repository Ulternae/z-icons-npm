import React from 'react';

export function LanCommentMiddleTopAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 384c0 53 43 96 96 96h320c53 0 96-43 96-96V160c0-53-43-96-96-96h-68c-5 0-9.8-2.4-12.8-6.4l-60-80c-4.5-6-11.6-9.6-19.2-9.6s-14.7 3.6-19.2 9.6l-60 80c-3 4-7.8 6.4-12.8 6.4H96c-53 0-96 43-96 96zm96 80c-44.2 0-80-35.8-80-80V160c0-44.2 35.8-80 80-80h68c10.1 0 19.6-4.7 25.6-12.8l60-80c1.5-2 3.9-3.2 6.4-3.2s4.9 1.2 6.4 3.2l60 80c6 8.1 15.5 12.8 25.6 12.8h68c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80z"})
  );
}

export default LanCommentMiddleTopAltThin;
