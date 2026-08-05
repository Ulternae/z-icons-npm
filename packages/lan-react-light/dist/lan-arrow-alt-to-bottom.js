import React from 'react';

export function LanArrowAltToBottom({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 496c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16m209-119c-9.4 9.4-24.6 9.4-33.9 0L31 233c-6.9-6.9-8.9-17.2-5.2-26.2S38.3 192 48 192h80V48c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v144h80c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2zm15-249V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v160c0 8.8-7.2 16-16 16H67.3L192 348.7 316.7 224H240c-8.8 0-16-7.2-16-16z"})
  );
}

export default LanArrowAltToBottom;
