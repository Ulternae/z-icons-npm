import React from 'react';

export function LanPedestalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 48c-8.8 0-16 7.2-16 16v400h288V64c0-8.8-7.2-16-16-16zM32 464V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v400h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm88-352a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanPedestalRegular;
