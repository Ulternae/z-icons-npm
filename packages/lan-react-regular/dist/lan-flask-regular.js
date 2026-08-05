import React from 'react';

export function LanFlaskRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 24c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v169.6l120.7 211.2c4.8 8.4 7.3 17.9 7.3 27.6 0 30.7-24.9 55.6-55.6 55.6H55.6C24.9 512 0 487.1 0 456.4c0-9.7 2.5-19.2 7.3-27.6L128 217.6V48h-8c-13.3 0-24-10.7-24-24m80 24v176c0 4.2-1.1 8.3-3.2 11.9L133.9 304H314l-38.9-68.1c-2.1-3.6-3.2-7.7-3.2-11.9V48h-96zm-69.5 304L49 452.6c-.7 1.1-1 2.4-1 3.8 0 4.2 3.4 7.6 7.6 7.6h336.8c4.2 0 7.6-3.4 7.6-7.6 0-1.3-.3-2.6-1-3.8L341.5 352z"})
  );
}

export default LanFlaskRegular;
